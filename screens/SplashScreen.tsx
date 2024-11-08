import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { WithoutAuthStackParamList } from "@/types/RootStackParamList";

type SplashScreenProps = {
  navigation: StackNavigationProp<WithoutAuthStackParamList, "Splash">;
  route: RouteProp<WithoutAuthStackParamList, "Splash">;
};

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  const height = Dimensions.get("window").height;
  const marginTop = height * 0.1;

  const handleNavigation = () => {
    navigation.navigate("Login"); // Navigate to Login screen
  };
  const handleSignUp = () => {
    navigation.navigate("SignUp"); // Navigate to Login screen
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/welcome-splash.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleNavigation}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, marginTop: 130 }}>
            Don't have an account?{" "}
            <TouchableOpacity onPress={handleSignUp}>
            <Text style={{ color: "#4c84ff", marginBottom: -2 }}>REGISTER NOW</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30
  },
  button: {
    backgroundColor: "#0284c7",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
