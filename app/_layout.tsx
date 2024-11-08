import 'reflect-metadata';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { Provider } from 'inversify-react';
import AuthContextProvider from '@/context/AuthContext';
import container from '@/config-ioc/ioc';
import Root from '@/components/Root';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
    },
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4678fb',
    secondary: '#f34949',
  },
};

export default function RootLayout() {
  return (
    <>
      <StatusBar translucent style="light" />
      <Provider key={container.id} container={container}>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <PaperProvider theme={theme}>
              <Root />
            </PaperProvider>
          </AuthContextProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}