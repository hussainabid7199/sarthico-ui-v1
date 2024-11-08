import "react-native-gesture-handler";
import { WithoutAuthStackParamList } from "../../types/RootStackParamList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "@/screens/SplashScreen";
import LoginScreen from "@/screens/LoginScreen";
import ForgotPasswordScreen from "@/screens/ForgotPasswordScreen";
import SignUpScreen from "@/screens/SignUpScreen";
import ValidateOTPScreen from "@/screens/ValidateOTPScreen";

const WithoutAuthStack = createNativeStackNavigator<WithoutAuthStackParamList>();

const WithoutAuthScreens = () => {
  return (
    <WithoutAuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <WithoutAuthStack.Screen name="Splash" component={SplashScreen} />
      <WithoutAuthStack.Screen name="Login" component={LoginScreen} />
      <WithoutAuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <WithoutAuthStack.Screen name="SignUp" component={SignUpScreen} />
      <WithoutAuthStack.Screen name="ValidateOTP" component={ValidateOTPScreen} />
    </WithoutAuthStack.Navigator>
  );
};

export default WithoutAuthScreens;
