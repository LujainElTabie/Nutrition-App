import React from "react";
import { StyleSheet, Text } from "react-native";

function Badge() {
  return <Text style={styles.container}>FOOD</Text>;
}

const styles = StyleSheet.create({
  container: {
    color: "white",
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "black",
    borderRadius: 16,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
});
export default Badge;
