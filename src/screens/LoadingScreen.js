import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import loadingLottie from "../../assets/loading.json";

function LoadingScreen({ navigation, route }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          clearInterval(interval);
          return 1;
        }
        return prev + 0.05;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 1) {
      navigation.replace("Nutrition Screen", { photo: route.params.photo });
    }
  }, [progress, navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/nutrak_logo.png")} />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "75%",
          padding: "10%",
        }}
      >
        <LottieView
          source={loadingLottie}
          autoPlay
          loop
          style={styles.lottie}
          speed={0.3}
        />
        <LottieView
          source={require("../../assets/progressBar.json")}
          progress={progress}
          style={styles.progressBar}
        />
        <Text style={styles.text}>
          {Math.min(Math.round(progress * 100), 99)}%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: "10%",
  },
  lottie: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    color: "white",
  },
  progressBar: {
    width: 300,
    height: 10,
    marginTop: 20,
    flex: 1,
  },
});

export default LoadingScreen;
