import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import CameraScreen from "./src/screens/CameraScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import NutritionResults from "./src/screens/NutritionResults";
import StreaksScreen from "./src/screens/StreaksScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Camera Screen" component={CameraScreen} />
        <Stack.Screen name="Loading Screen" component={LoadingScreen} />
        <Stack.Screen name="Nutrition Screen" component={NutritionResults} />
        <Stack.Screen name="Streaks Screen" component={StreaksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
