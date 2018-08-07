import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Stateless component or function component
const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffdfba",
    borderBottomWidth: 1,
    borderBottomColor: "#66594a"
  },
  title: {
    color: "#66594a",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10
  }
});

export default Header;
