import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  WithAuth: NavigatorScreenParams<AuthStackParamList>;
  WithoutAuth: NavigatorScreenParams<WithoutAuthStackParamList>;
  StackScreens: NavigatorScreenParams<StackScreensParamList>;
};

export type AuthStackParamList = {
  Home: undefined;
};

export type WithoutAuthStackParamList = {
  Login: undefined;
  Splash: undefined;
  ForgotPassword: undefined;
  SignUp: undefined;
  ValidateOTP: {
    userId?: string
  };
};

export type StackScreensParamList = {
  MyProfile: undefined;
};
