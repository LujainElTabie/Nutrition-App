import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function NutritionInfo({ title, value, img }) {
  return (
    <View style={styles.container}>
      <Image source={img} />
      <View style={{ marginStart: 8 }}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.text}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#1D1D1D",
    padding: 10,
    borderRadius: 12,
    width: "47%",
  },
  titleText: {
    color: "#BDBDBD",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "400",
  },
  text: {
    color: "white",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
  },
});

export default NutritionInfo;
