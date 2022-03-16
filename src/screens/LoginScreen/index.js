import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import LoginForm from "../../components/LoginForm";
const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} style="inverted" />
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          style={styles.background}
        />
        <View style={styles.iconWrapper}>
          <Ionicons name="logo-instagram" size={100} />

          <Image
            style={styles.logo1}
            source={require("../../../assets/instaText.png")}
          />
        </View>
        <LoginForm />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 250,
  },
  iconWrapper: {
    marginHorizontal: 100,
    marginTop: 100,
    marginBottom: 40,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logo1: {
    height: 100,
    width: 220,
  },
});
export default LoginScreen;
