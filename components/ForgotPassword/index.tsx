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
import { WithoutAuthStackParamList } from "@/types/RootStackParamList";
import { useForm } from "react-hook-form";
import TextBox from "../Custom-Controls/Textbox";

type ForgotPasswordProps = {
  navigation: StackNavigationProp<WithoutAuthStackParamList, "ForgotPassword">;
};

const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
  const { control, handleSubmit } = useForm<{ username: string }>({
    defaultValues: {
      username: "",
    },
  });

  const handleForgotPassword = (data: { username: string }) => {
    console.log("Forgot Password in with:", data.username);

    if (data.username) {
      navigation.navigate("ValidateOTP");
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
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        Enter your username to rest your account
      </Text>
      <View style={styles.form}>
        <TextBox
          control={control}
          name="username"
          placeholder="Username"
          iconName="user"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleForgotPassword)}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

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
