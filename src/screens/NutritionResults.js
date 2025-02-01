import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CalciumImg from "../../assets/Nutrition/Calcium.png";
import CalorieImg from "../../assets/Nutrition/Calories.png";
import CarbImg from "../../assets/Nutrition/Carbs.png";
import FatsImg from "../../assets/Nutrition/Fats.png";
import IronImg from "../../assets/Nutrition/Iron.png";
import ProteinImg from "../../assets/Nutrition/Proteins.png";
import Button from "../components/Button";
import Header from "../components/Header";
import Badge from "../components/Nutrition/Badge";
import NutritionInfo from "../components/Nutrition/NutritionInfo";
import NutritionSection from "../components/Nutrition/NutritionSection";
import WeeklyMealNutrition from "../components/Nutrition/WeeklyMealNutrition";

const Divider = () => <View style={{ marginTop: 24 }} />;

const { height: screenHeight } = Dimensions.get("screen");
const MAX_HEADER_HEIGHT = screenHeight * 0.4;
const MIN_HEADER_HEIGHT = 75;

function NutritionResults({ navigation, route }) {
  const macronutrients = [
    { title: "Protein", value: "12g", img: ProteinImg },
    { title: "Carbs", value: "30g", img: CarbImg },
    { title: "Fat", value: "15g", img: FatsImg },
  ];

  const micronutrients = [
    { title: "Iron", value: "10%", img: IronImg },
    { title: "Calcium", value: "20%", img: CalciumImg },
  ];

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const headerHeight = interpolate(
      scrollY.value,
      [0, 200],
      [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
      "clamp"
    );

    return {
      height: withTiming(headerHeight, { duration: 150 }),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedHeaderStyle, { overflow: "hidden" }]}>
        <ImageBackground
          source={{ uri: route.params.photo }}
          style={styles.imageBackground}
        >
          <Header
            title={"Nutrition Results"}
            blur
            onBackPress={() => navigation.goBack()}
          />
          <LinearGradient
            colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.4)", "black"]}
            style={styles.linearGradient}
          />
          <View style={{ padding: "5%" }}>
            <Badge />
            <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
              Pepperoni Pizza
            </Text>
          </View>
        </ImageBackground>
      </Animated.View>
      <Animated.ScrollView
        style={{ flex: 1, padding: "5%" }}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: 14,
            lineHeight: 16,
            marginBottom: 12,
          }}
        >
          Nutritional Overview:
        </Text>
        <NutritionInfo img={CalorieImg} title="Calories" value="320 kcal" />
        <Divider />
        <NutritionSection
          title="Macronutrients"
          nutrients={macronutrients}
          total="60g"
        />
        <Divider />
        <NutritionSection
          title="Microutrients"
          nutrients={micronutrients}
          total="30%"
        />
        <Divider />
        <WeeklyMealNutrition />
        <Divider />

        <Button
          text="Save to Daily Log"
          onPress={() => navigation.navigate("Streaks Screen")}
        />
        <View style={{ marginTop: 24 }} />
        <Button
          text="Go to streaks"
          onPress={() => navigation.navigate("Streaks Screen")}
        />
        <Divider />
        <Text style={styles.bottomText}>
          Want more insights?{" "}
          <Text
            style={{
              fontWeight: "500",
              textDecorationStyle: "solid",
              textDecorationLine: "underline",
            }}
          >
            Upgrade to Premium
          </Text>
        </Text>
        <Divider />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 50,
    height: 300,
  },
  imageBackground: {
    width: "100%",
    height: Dimensions.get("screen").height * 0.4,
    justifyContent: "space-between",
  },
  linearGradient: {
    position: "absolute",
    width: "100%",
    height: "75%",
    bottom: 0,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
  bottomText: {
    color: "white",
    fontSize: 14,
    lineHeight: 18,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "400",
    marginBottom: 24,
  },
});

export default NutritionResults;
