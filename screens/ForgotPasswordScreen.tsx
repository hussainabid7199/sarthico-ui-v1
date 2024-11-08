import ForgotPassword from "@/components/ForgotPassword";
import { WithoutAuthStackParamList } from "@/types/RootStackParamList";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";

type ForgotPasswordScreenProps = {
  navigation: StackNavigationProp<WithoutAuthStackParamList, "ForgotPassword">;
  route: RouteProp<WithoutAuthStackParamList, "ForgotPassword">;
};

const ForgotPasswordScreen = ({navigation}: ForgotPasswordScreenProps) => {
  return <ForgotPassword navigation={navigation} />;
};

export default ForgotPasswordScreen;
