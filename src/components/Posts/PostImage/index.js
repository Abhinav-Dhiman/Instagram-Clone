import { View, StyleSheet, Image } from "react-native";
import React from "react";

const PostImage = ({ post }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: post.imageUrl }} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 420,
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});

export default PostImage;
