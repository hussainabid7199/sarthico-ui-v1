import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { WithoutAuthStackParamList } from "@/types/RootStackParamList";
import CustomSelectBox from "../Custom-Controls/CustomSelectBox";
import SignUpModel from "@/models/SignUpModel";
import { useForm } from "react-hook-form";
import TextBox from "../Custom-Controls/Textbox";

type SignUpProps = {
  navigation: StackNavigationProp<WithoutAuthStackParamList, "SignUp">;
};

type SignUpAs = {
  id: number;
  value: string;
  name: string;
};

const SignUp = ({ navigation }: SignUpProps) => {
  const signUpAs: SignUpAs[] = [
    {
      id: 1,
      value: "1",
      name: "Technician",
    },
    {
      id: 2,
      value: "2",
      name: "Customer",
    },
  ];

  const { control, handleSubmit } = useForm<SignUpModel>({
    defaultValues: {
      username: "",
      phone: "",
      signUpAs: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSignUp = (data: SignUpModel) => {
    console.log("Signup in with:", data);
    if (
      data.username &&
      data.password &&
      data.confirmPassword &&
      data.phone &&
      data.signUpAs &&
      data.password === data.confirmPassword
    ) {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>SignUp</Text>
      <Text style={styles.subtitle}>Enter your credentials to signup</Text>
      <View style={styles.form}>
        <TextBox
          control={control}
          name="username"
          placeholder="Username"
          iconName="user"
        />
        <TextBox
          control={control}
          name="password" 
          placeholder="Password"
          iconName="lock"
          secureTextEntry={true}
        />
        <TextBox
          control={control}
          name="confirmPassword"
          placeholder="Confirm Password"
          iconName="lock"
          secureTextEntry={true}
        />
        <TextBox
          control={control}
          name="phone" // Updated name
          placeholder="Phone"
          iconName="phone"
        />
        <CustomSelectBox
          control={control}
          name="signUpAs"
          items={signUpAs}
          isMultiSelect={false}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignUp)}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 32,
  },
  form: {
    gap: 16,
  },
  button: {
    backgroundColor: "#0284c7",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
