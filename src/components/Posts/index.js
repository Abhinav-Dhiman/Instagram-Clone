import { View, Text } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import { Divider } from "react-native-elements/dist/divider/Divider";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";

const Posts = ({ post }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Divider width={1} color="black" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  );
};

export default Posts;
