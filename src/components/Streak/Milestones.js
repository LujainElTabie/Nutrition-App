import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Done from "../../../assets/check_circle.png";

function Milestones({ img, text, done, color }) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={img} style={[styles.img, { marginEnd: 8 }]} />
        <Text style={styles.text}>{text}</Text>
      </View>
      {done && <Image source={Done} style={styles.img} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#44290A",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    justifyContent: "space-between",
    marginBottom: 12,
  },
  img: { width: 24, height: 24 },
  text: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "400",
    color: "white",
  },
});

export default Milestones;
