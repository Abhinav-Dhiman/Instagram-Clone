import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const Header = () => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()}>
        <Ionicons name="chevron-back" size={35} color="white" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>New Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    color: "whitesmoke",
    fontWeight: "700",
    marginRight: "50%",
  },
});

export default Header;
