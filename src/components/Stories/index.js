import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { users } from "../../../data/Users";
import styles from "./styles";

const Stories = () => {
  
  return (
    <View style={{ marginHorizontal: 10 }}>
      <ScrollView horizontal alwaysBounceHorizontal={true}>
        <View style={styles.profileContainer}>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>  +  </Text>
          </View>
          <Image
            style={styles.imgProfile}
            source={{uri:'https://randomuser.me/api/portraits/women/68.jpg'}}
          />
          <Text style={[styles.name, { marginTop: 5, fontSize: 13 }]}>
            {" "}
            Your Story
          </Text>
        </View>
        {users.map((story, index) => (
          <View key={index} style={styles.storyWrapper}>
            <View style={styles.imageContainer}>
              <Image style={styles.img} source={{ uri: story.image }} />
            </View>
            <Text style={styles.name}>
              {story.user.length > 8
                ? story.user.slice(0, 7).toLowerCase() + " ..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;
