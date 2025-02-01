import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useRef, useState } from "react";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CameraScreen({ navigation }) {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function navigateToLoadingScreen(photo) {
    console.log("Navigating to Loading Screen");
    navigation.navigate("Loading Screen", { photo });
  }
  async function takePicture() {
    if (cameraRef.current) {
      const photoData = await cameraRef.current.takePictureAsync();
      navigateToLoadingScreen(photoData.uri);
    }
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      navigateToLoadingScreen(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        pictureSize={[4, 3]}
        style={styles.camera}
        ref={cameraRef}
        facing={facing}
      >
        <View style={styles.instructionsContainer}>
          <MaterialCommunityIcons name="line-scan" size={36} color="white" />
          <View style={styles.instructionsTextContainer}>
            <Text style={styles.instructionsTitle}>Scan Your Food</Text>
            <Text style={styles.instructionsText}>
              Ensure your food is well-lit and in focus for the most accurate
              scan.
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.galleryButton} onPress={pickImage}>
            <MaterialCommunityIcons
              name="image-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.snapButton} onPress={takePicture}>
            <View style={styles.snapButtonInner} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.galleryButton}
            onPress={toggleCameraFacing}
          >
            <MaterialCommunityIcons
              name="camera-flip-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    justifyContent: "space-between",
    padding: "10%",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "center",
  },
  galleryButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width / 8,
    height: Dimensions.get("window").width / 8,
    borderRadius: Dimensions.get("window").width / 8,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  snapButton: {
    width: Dimensions.get("window").width / 5,
    height: Dimensions.get("window").width / 5,
    borderRadius: Dimensions.get("window").width / 5,
    backgroundColor: "#66BB6A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  snapButtonInner: {
    width: Dimensions.get("window").width / 6.5,
    height: Dimensions.get("window").width / 6.5,
    borderRadius: Dimensions.get("window").width / 6.5,
    backgroundColor: "white",
  },
  instructionsContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    padding: "5%",
    borderRadius: 12,
    justifyContent: "space-between",
  },
  instructionsTextContainer: {
    flexShrink: 1,
    marginStart: "5%",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  instructionsTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    lineHeight: 16,
  },
  instructionsText: {
    fontSize: 10,
    fontWeight: "400",
    color: "white",
    lineHeight: 14,
  },
});
