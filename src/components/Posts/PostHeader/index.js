import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const PostHeader = ({ post }) => {
  return (
    <View style={styles.wrapper}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.imageContainer}>
          <Image style={styles.img} source={{ uri: post.profile_picture }} />
        </View>
        <Text style={styles.name}>
          {post.user.length > 8
            ? post.user.slice(0, 7).toLowerCase() + "..."
            : post.user.toLowerCase()}
        </Text>
      </View>
      <TouchableOpacity>
        <Ionicons
          style={{ marginRight: 10 }}
          name="ellipsis-vertical"
          size={18}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "orange",
    padding: 2,
    marginHorizontal: 5,
    marginLeft: 10,
  },
  img: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    borderRadius: 20,
  },
  name: {
    color: "white",
    fontSize: 12,
  },
});
export default PostHeader;
