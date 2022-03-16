import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  img: {
    height: 55,
    width: 55,
    resizeMode: "contain",
    borderRadius: 20,
  },
  name: {
    color: "white",
    marginTop: 6,
    fontSize: 13,
  },
  storyWrapper: {
    alignItems: "center",
    marginHorizontal: 3,
  },
  imageContainer: {
    backgroundColor: "black",
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "greenyellow",
    padding: 3,
  },
  imgProfile: {
    height: 65,
    width: 65,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 2,
  },
  profileContainer: {
    paddingHorizontal: 5,
    marginRight: 7,
  },
  unreadBadge: {
    backgroundColor: "cyan",
    position: "absolute",
    zIndex: 100,
    borderRadius: 50,
    left: 50,
    bottom: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 1,
  },
  unreadBadgeText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
