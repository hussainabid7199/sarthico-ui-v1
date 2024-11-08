"use client";

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
import {
  RootStackParamList,
  WithoutAuthStackParamList,
} from "@/types/RootStackParamList";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import TextBox from "../Custom-Controls/Textbox";
import container from "@/config-ioc/ioc";
import IUnitOfService from "@/service/interface/IUnitOfService";
import { TYPES } from "@/config-ioc/types";
import LoginModel from "@/model/LoginModel";

type LoginProps = {
  navigation: StackNavigationProp<WithoutAuthStackParamList, "Login">;
};

const Login = ({ navigation }: LoginProps) => {
  const unitOfService = container.get<IUnitOfService>(TYPES.IUnitOfService);
  const internalNavigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();

  const { control, handleSubmit } = useForm<LoginModel>({
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleLogin = async (model: LoginModel) => {
    console.log("handleLogin", model);
    const response = await unitOfService.AccountService.login(model);
    if (response.status === 200 && response.data.data && response.data.data?.userId) {
      internalNavigation.navigate("WithoutAuth", {
        screen: "ValidateOTP",
        params: {
          userId: response.data.data?.userId,
        },
      });
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>
        Enter your credentials to access your account
      </Text>
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
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleLogin)}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={handleForgotPassword}
      >
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  inputIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#0f172a",
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
  forgotPassword: {
    marginTop: 16,
    alignItems: "center",
  },
  forgotPasswordText: {
    color: "#0284c7",
    fontSize: 14,
  },
});
