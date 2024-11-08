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
import { useForm } from "react-hook-form";
import TextBox from "../Custom-Controls/Textbox";
import { WithoutAuthStackParamList } from "@/types/RootStackParamList";
import { RouteProp } from "@react-navigation/native";

type OTP_Props = {
  route: RouteProp<WithoutAuthStackParamList, 'ValidateOTP'>;
};

const ValidateOTP = ({ route }: OTP_Props) => {
  const { userId } = route.params;
  const { control, handleSubmit } = useForm<{ otp: string }>({
    defaultValues: {
      otp: "",
    },
  });

  const handleOTP = (data: { otp: string }) => {
    console.log("OTP in with:", data.otp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Validate OTP</Text>
      <Text style={styles.subtitle}>Enter your OTP</Text>
      <View style={styles.form}>
        <TextBox
          control={control}
          name="otp"
          placeholder="OTP"
          iconName="shield"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleOTP)}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
