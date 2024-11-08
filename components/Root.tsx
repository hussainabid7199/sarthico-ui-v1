import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import CustomNavigation from './navigation/CustomNavigation';
import Loader from './Loader';

const Root = () => {
  const [isTryingLoading, setIsTryingLoading] = useState<boolean>(true);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        authContext.authenticate(storedToken);
      }

      setIsTryingLoading(false);
    })();
  }, []);

  if (isTryingLoading) {
    return <Loader />;
  }

  return <CustomNavigation />;
};

export default Root;
