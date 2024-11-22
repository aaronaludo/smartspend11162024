import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/Form";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ForgotPassword = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {}, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleOTP = async () => {
    setError("");
    try {
      const response = await axios.post(
        `${"https://smart-spend.online"}/api/users/otp/${user.id}`,
        {
          code: code,
        }
      );

      const { token } = response.data.response;

      await AsyncStorage.setItem("userToken", token);
      await AsyncStorage.setItem("userData", JSON.stringify(user));

      navigation.navigate("Tab Navigator", { screen: "Overview" });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.error);
        setError(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

  const handleResend = async () => {
    setTimeLeft(600);

    try {
      const response = await axios.get(
        `${"https://smart-spend.online"}/api/users/otp/resend/${user.id}`
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={[styles.container, { flex: 1 }]}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.description}>
          Please enter your email address. You will receive a code via email,
          provided the email is already registered in the system.
        </Text>
        {error !== "" && (
          <Text style={[styles.description, { color: "red" }]}>{error}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => {
            const cleanEmail = text.trim();
            setEmail(cleanEmail);
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ForgotPassword;
