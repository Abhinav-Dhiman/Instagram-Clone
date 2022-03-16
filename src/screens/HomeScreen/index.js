import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Header";
import Stories from "../../components/Stories";
import Posts from "../../components/Posts";
import { PostsData } from "../../../data/PostsData";
import BottomTab from "../../components/BottomTab";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Stories />
        <ScrollView>
          {PostsData.map((post, index) => (
            <Posts post={post} key={index} />
          ))}
        </ScrollView>
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
