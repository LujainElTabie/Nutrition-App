import React, { useEffect } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Bronze from "../../assets/Streak/Bronze.png";
import Gold from "../../assets/Streak/Gold.png";
import Platinum from "../../assets/Streak/Platinum.png";
import Silver from "../../assets/Streak/Silver.png";
import Header from "../components/Header";
import Calendar from "../components/Streak/Calendar";
import Milestones from "../components/Streak/Milestones";

function StreaksScreen({ navigation }) {
  const fadeInOpacity = useSharedValue(0);

  useEffect(() => {
    fadeIn();
  }, []);

  const fadeIn = () => {
    fadeInOpacity.value = withTiming(1, {
      duration: 3000,
      easing: Easing.linear,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeInOpacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Header
        title="Streaks"
        share
        height="15%"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView>
        <Animated.View style={[styles.streak, animatedStyle]}>
          <ImageBackground
            source={require("../../assets/Streak.png")}
            style={styles.background}
            resizeMode="contain"
          >
            <Text style={styles.number}>5</Text>
          </ImageBackground>
          <Text style={styles.text}>
            You're on a {"\n"}{" "}
            <Text style={styles.textLarge}>5 days Streak!</Text> {"\n"}Keep it
            up!
          </Text>
        </Animated.View>
        <View>
          <Calendar />
        </View>
        <View style={styles.milestonesContainer}>
          <View style={styles.milestonesHeader}>
            <Text style={styles.headerText}>Milestones</Text>
            <Text style={styles.viewAll}>View All {" >"}</Text>
          </View>
          <Milestones
            img={Silver}
            text="7-day streak achiever"
            color="#1F1F1F"
            done
          />
          <Milestones
            img={Bronze}
            text="10-day streak achiever"
            color="#221506"
          />
          <Milestones
            img={Gold}
            text="20-day streak achiever"
            color="#041822"
          />
          <Milestones
            img={Platinum}
            text="30-day streak achiever"
            color="#130829"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  number: {
    color: "#141414",
    fontSize: 52,
    lineHeight: 52,
    fontWeight: "600",
    marginTop: 50,
  },
  text: { color: "#BDBDBD", textAlign: "center", fontSize: 14 },
  textLarge: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "600",
    color: "white",
  },
  streak: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  background: {
    width: 100,
    height: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  milestonesContainer: {
    marginHorizontal: 20,
    marginTop: 36,
  },
  milestonesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 12,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  viewAll: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    color: "white",
  },
});

export default StreaksScreen;
