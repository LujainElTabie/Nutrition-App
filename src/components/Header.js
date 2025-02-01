import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BlurView } from "expo-blur";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function Header({ title, onBackPress, share = false, blur, height }) {
  const isAndroid = Platform.OS === "android";
  let intensity = isAndroid ? 10 : 20;
  if (!blur) intensity = 0;
  return (
    <BlurView
      intensity={intensity}
      experimentalBlurMethod="dimezisBlurView"
      style={[styles.header, { height: height || "25%" }]}
      tint="systemUltraThinMaterialDark"
    >
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder}>
        {share && (
          <MaterialCommunityIcons
            name="share-variant-outline"
            size={24}
            color="white"
          />
        )}
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  backButton: {
    width: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    flex: 1,
  },
  placeholder: {
    width: 40,
  },
});

export default Header;
