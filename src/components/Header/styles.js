import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    alignItems: "center",
  },
  logo: {
    height: 60,
    width: 120,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 10,
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    zIndex: 100,
    borderRadius: 20,
    left: 25,
    bottom: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
  },
  unreadBadgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
  },
});
