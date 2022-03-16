import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/30/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/30/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/50/ffffff/instagram-reel.png",
  },
  {
    name: "Likes",
    active: "https://img.icons8.com/ios-filled/96/ffffff/like--v1.png",
    inactive: "https://img.icons8.com/ios/96/ffffff/like--v1.png",
  },
  {
    name: "Profile",
    active: "https://randomuser.me/api/portraits/women/68.jpg",
    inactive: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const BottomTab = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <View style={styles.wrapper}>
      <Divider width={0} color="#383838" />
      <View style={styles.iconContainer}>
        {bottomTabIcons.map((icon, index) => (
          <TouchableOpacity
            key={index * Date.now() + Math.floor(Math.random() * 9)}
            onPress={() => setActiveTab(icon.name)}
          >
            <Image
              source={{
                uri: activeTab === icon.name ? icon.active : icon.inactive,
              }}
              style={[
                styles.icon,
                icon.name === "Profile" ? styles.profile_pic() : null,
                icon.name === "Profile" && icon.name === activeTab
                  ? styles.profile_pic(activeTab)
                  : null,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    width: "100%",
    zIndex: 999,
    backgroundColor: "#000",
    bottom: 0,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  icon: {
    height: 30,
    width: 30,
  },
  profile_pic: (activeTab) => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 1 : 0,
    borderColor: activeTab === "Profile" ? "white" : null,
  }),
});

export default BottomTab;
