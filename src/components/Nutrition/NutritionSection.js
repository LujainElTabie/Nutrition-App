import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NutritionInfo from "./NutritionInfo";

function NutritionSection({ title, nutrients, total }) {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>{title}</Text>
        <Text
          style={[styles.title, { fontWeight: "400" }]}
        >{`Total: ${total}`}</Text>
      </View>
      <View style={styles.container}>
        {nutrients.map((nutrient) => {
          return (
            <NutritionInfo
              key={nutrient.title}
              img={nutrient.img}
              title={nutrient.title}
              value={nutrient.value}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 12,
  },
});

export default NutritionSection;
