import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import Header from "./Header";
import FormikPostUploader from "./FormikPostUploader";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const NewPostScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor:'#101010' }}>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,0.9)", "transparent"]}
          style={styles.background}
        />
        <StatusBar hidden={false} style="inverted" />
        <Header />
        <FormikPostUploader />
      </SafeAreaView>
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
});

export default NewPostScreen;
