import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";
import NewPostScreen from "../../screens/NewPostScreen";
import { Tooltip } from "react-native-elements";
import { auth } from "../../../firebase-config";
import { signOut } from "firebase/auth";

const handleSignOut = async () => {
  try {
    await signOut(auth);
    console.log("Signed Out Successfully");
  } catch (error) {
    Alert.alert(error.message);
  }
};

const Header = () => {
  const { navigate, goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} style="inverted" />
      <TouchableOpacity onPress={handleSignOut}>
        <Image
          style={styles.logo}
          source={require("../../../assets/instaLogo.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigate(NewPostScreen)}>
          <Ionicons
            style={styles.icon}
            name="add-circle-outline"
            size={27}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons
            style={styles.icon}
            name="heart-outline"
            size={27}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          {/* <Tooltip
            onClose={() => null}
            containerStyle={{ margin: 10 }}
            width={70}
            height={33}
            withPointer={false}
            withOverlay={false}
            toggleAction="onLongPress"
            pointerColor="white"
            backgroundColor="#dbfbfb"
            popover={
              <Text
                style={{ color: "black", fontSize: 10, fontWeight: "bold" }}
              >
                Comments
              </Text>
            }
          > */}
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>10</Text>
          </View>
          <Ionicons
            style={[styles.icon, { marginRight: 15 }]}
            name="chatbubble-ellipses-outline"
            size={27}
            color="white"
          />
          {/* </Tooltip> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
