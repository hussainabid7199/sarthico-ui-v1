import { ReactNode, createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import jwtDecode from 'jwt-decode';
import { UserJwtDto } from '@/dtos/UserJwtDto';

interface AuthContextProps {
  token: string | undefined | null;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => Promise<boolean | null | undefined>;
  decodeJwt: () => Promise<UserJwtDto | null | undefined>;
}

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => Promise.resolve(null),
  decodeJwt: () => Promise.resolve(null),
});

interface AuthContextProviderProps {
  children: ReactNode;
}
const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | undefined | null>();

  const authenticate = (token: string) => {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  };

  async function logout() {
    try {
      setAuthToken(null);
      await AsyncStorage.removeItem('token');
      return true;
    } catch {
      return false;
    }
  }

  async function decodeJwt() {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode<UserJwtDto>(token);
        return decodedToken;
      } catch (error) {
        return null;
      }
    }
  }

  const value: AuthContextProps = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    decodeJwt: decodeJwt,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
