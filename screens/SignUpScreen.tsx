import SignUp from "@/components/SignUp";
import { WithoutAuthStackParamList } from "@/types/RootStackParamList";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";

type SignUpScreenProps = {
  navigation: StackNavigationProp<WithoutAuthStackParamList, "SignUp">;
  route: RouteProp<WithoutAuthStackParamList, "SignUp">;
};

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  return <SignUp navigation={navigation} />;
};

export default SignUpScreen;
