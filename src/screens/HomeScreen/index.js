import { SafeAreaView, StyleSheet, ScrollView, LogBox } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header";
import Stories from "../../components/Stories";
import Posts from "../../components/Posts";
import { PostsData } from "../../../data/PostsData";
import BottomTab from "../../components/BottomTab";
import {
  getFirestore,
  collectionGroup,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const HomeScreen = () => {
  LogBox.ignoreLogs([
    "Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.",
  ]);
  const db = getFirestore();
  const colGroupRef = collectionGroup(db, "posts");
  const q = query(colGroupRef, orderBy("createdAt", "desc"));
  const [posts, setPosts] = useState([]);
  const componentMounted = useRef(true);
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      if (componentMounted.current) {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
      return () => {
        componentMounted.current = false;
      };
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Stories />
        <ScrollView>
          {posts.map((post, index) => (
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
