import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function Button({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={["#E29523", "#98671E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.linearGradient}
      >
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
  },
  linearGradient: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    width: "100%",
  },
  text: {
    color: "#141414",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
  },
});

export default Button;
