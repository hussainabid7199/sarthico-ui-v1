import Login from '@/components/Login'
import { WithoutAuthStackParamList } from '@/types/RootStackParamList';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'

type LoginScreenProps = {
  navigation: StackNavigationProp<WithoutAuthStackParamList, "Login">;
  route: RouteProp<WithoutAuthStackParamList, "Login">;
};

const LoginScreen = ({navigation}: LoginScreenProps) => {
  return (
    <Login navigation={navigation}/>
  )
}

export default LoginScreen;