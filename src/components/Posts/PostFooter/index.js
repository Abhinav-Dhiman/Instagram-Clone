import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "react-native-elements";
import { auth } from "../../../../firebase-config";

const PostFooter = ({ post, handleLike }) => {
  return (
    // Footer Section
    <View style={styles.wrapper}>
      <View style={styles.iconContainer}>
        {/* Icons Section */}
        <TouchableOpacity onPress={() => handleLike(post)}>
          <Ionicons
            style={styles.icon}
            name={
              post.likes_by_users.includes(auth.currentUser.email)
                ? "heart"
                : "heart-outline"
            }
            size={30}
            color={
              post.likes_by_users.includes(auth.currentUser.email)
                ? "red"
                : "white"
            }
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            style={styles.icon}
            name="chatbubble-outline"
            size={28}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            style={styles.icon}
            name="arrow-redo-outline"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            style={[styles.icon, { marginLeft: 150 }]}
            name="bookmark-outline"
            color="white"
            size={32}
          />
        </TouchableOpacity>
      </View>

      {/* Likes Section */}

      <View style={styles.likesContainer}>
        <Text style={styles.likesText}>
          {post.likes_by_users.length
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
        <Text
          style={{
            color: "white",
            marginLeft: 5,
          }}
        >
          likes ..
        </Text>
      </View>

      {/* Caption Section */}
      <View>
        <Text style={{ color: "white", marginLeft: 5, marginTop: 2 }}>
          <Text style={{ fontWeight: "bold" }}>{post.user.toLowerCase()} </Text>
          <Text>{post.caption}</Text>
        </Text>
      </View>

      {/* Comment Section */}
      <View style={{ marginLeft: 5, marginTop: 2, marginBottom: 2 }}>
        {!!post.comments.length && (
          <Text style={{ color: "grey" }}>
            View {post.comments.length > 1 ? `all ${post.comments.length}` : ""}{" "}
            {post.comments.length > 1 ? "comments" : "comment"}
          </Text>
        )}
      </View>
      <>
        {post.comments.map((comment, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", marginLeft: 5, marginBottom: 3 }}
          >
            <Text style={{ color: "white" }}>
              <Text style={{ fontWeight: "bold" }}>{comment.user} </Text>
              <Text>{comment.comment}</Text>
            </Text>
          </View>
        ))}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 3,
  },
  iconContainer: {
    flexDirection: "row",
    padding: 3,
  },
  icon: {
    marginHorizontal: 12,
  },
  likesContainer: {
    flexDirection: "row",
    marginTop: 2,
  },
  likesText: {
    color: "white",
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 14,
  },
});
export default PostFooter;
