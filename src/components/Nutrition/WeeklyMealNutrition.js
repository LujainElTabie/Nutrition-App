import React from "react";
import { Dimensions, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

const WeeklyMealNutrition = () => {
  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        data: [40, 60, 80, 100, 80, 60, 70],
      },
    ],
  };

  return (
    <View
      style={{
        backgroundColor: "#1D1D1D",
        padding: 25,
        borderRadius: 15,
        borderColor: "#262626",
        borderStyle: "solid",
        borderWidth: 1,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Weekly Meal Nutrition
      </Text>

      <BarChart
        data={data}
        width={screenWidth * 0.8}
        height={180}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: "#1D1D1D",
          backgroundGradientTo: "#1D1D1D",
          color: (opacity = 1) => `transparent`,
          labelColor: (opacity = 1) => "#989898",
          barPercentage: 0.4,
          barRadius: 5,
          fillShadowGradientFrom: "#FFB240",
          fillShadowGradientTo: "#79C37D",
          fillShadowGradientFromOpacity: 1,
          fillShadowGradientToOpacity: 1,
        }}
        showBarTops={false}
        fromZero
        showValuesOnTopOfBars={false}
        withInnerLines={false}
        withHorizontalLabels={false}
        style={{
          marginLeft: -25,
        }}
      />

      <View
        style={{
          width: screenWidth * 0.9,
          height: 5,
          backgroundColor: "#1D1D1D",
          position: "absolute",
          bottom: "25%",
        }}
      />
    </View>
  );
};

export default WeeklyMealNutrition;
