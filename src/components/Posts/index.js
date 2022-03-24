import { View, Text } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import { Divider } from "react-native-elements/dist/divider/Divider";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";
import { auth } from "../../../firebase-config";
import {
  getFirestore,
  updateDoc,
  doc,
  collection,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

const Posts = ({ post }) => {
  const db = getFirestore();
  const colRef = collection(db, "users");
  const postRef = doc(colRef, post.owner_email);
  const colRef2 = collection(postRef, "posts");
  const handleLike = async (post) => {
    //console.log(doc(colRef2, "CYNjAhkkV5Pfh7UAhttt").id);

    const currentLikeStatus = !post.likes_by_users.includes(
      auth.currentUser.email
    );
    const res = await updateDoc(doc(colRef2, post.id), {
      likes_by_users: currentLikeStatus
        ? arrayUnion(auth.currentUser.email)
        : arrayRemove(auth.currentUser.email),
    })
      .then(() => {
        console.log("Data Updated Successfully");
      })
      .catch((err) => {
        console.log("Error updating Docs", err.message);
      });

    return res;
  };
  return (
    <View style={{ marginVertical: 10 }}>
      <Divider width={1} color="black" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} handleLike={handleLike} />
    </View>
  );
};

export default Posts;
