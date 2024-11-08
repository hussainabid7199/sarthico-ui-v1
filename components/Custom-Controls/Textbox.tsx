import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { Feather } from "@expo/vector-icons";

interface TextBoxProps {
  control: any; // Control from react-hook-form
  name: string; // Field name for react-hook-form
  placeholder: string; // Placeholder text for the input field
  iconName: keyof typeof Feather.glyphMap; // Icon name for Feather icons
  secureTextEntry?: boolean; // Flag for password input
}

const TextBox: React.FC<TextBoxProps> = ({
  control,
  name,
  placeholder,
  iconName,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Feather name={iconName} size={20} color="#64748b" style={styles.inputIcon} />
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#64748b"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    paddingHorizontal: 10,
    height: 50,
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
});

export default TextBox;
