# Nutrition-App


## Prerequisites
Before you begin, ensure you have met the following requirements:

- Node.js: Version 14.x or later
- Expo CLI: Install globally using npm install -g expo-cli
- An Expo Go app: Available on both iOS and Android

## Steps

- clone repositry
- cd to repositry directory
- run npm install
- run npx expo start

## Running on Device

- Android: Open the Expo app on your device, scan the QR code from the terminal or browser, and the app will open on your device.
- iOS: For iOS devices, open the Expo Go app, scan the QR code, and it will load the app.


## Libraries used

- Expo: Expo is used to streamline development, simplifying the process of building React Native apps. It provides an excellent development environment with powerful tools for testing and deployment.

- react-navigation: A library for handling navigation in React Native. Used it for handling screen transitions and managing routes within the app.

- react-native-reanimated: A powerful animation library that is used for handling animations within the app, such as scrollable elements, custom transitions, etc.

- moment.js: Used for managing and formatting dates. This is helpful in the context of handling date-related logic and formatting dates in a readable format. Used to create Calendar for streaks.

- expo-blur: Provides a blur effect for components. It's used for creating blur effects in the UI, used for header.

- expo-camera: Allows access to the device's camera. This was integrated to enable camera functionalities, such as taking photos or videos. 

- expo-image-picker: A library used for selecting images or videos from the user's device. It's used for features like picking a profile picture or selecting a gallery image for upload.

- expo-linear-gradient: Used to create gradient backgrounds. It's leveraged to add smooth gradient transitions to various UI components, improving the visual appeal of the app.

## Relevant Notes 

- Expo Managed Workflow: This app was developed using Expo's managed workflow, which simplifies the process of building and deploying apps but may not offer the full flexibility of a bare React Native project.

## Approches and challenges

- Understanding the Requirements: I began by fully understanding the app’s requirements and breaking down the components needed for the user interface. I used React Native's components to handle most of the UI elements and integrated external libraries for specific functionality (e.g., animations, date handling).

- Building the Layout: I first focused on building the core layout and making sure it was responsive across different screen sizes. I used flexbox for layout styling and ensured the app was visually appealing.

- Implementing Navigation: Once the UI was set, I integrated navigation using react-navigation, which provided seamless transitions between screens.

- Integrating Animations: I used react-native-reanimated to add smooth animations when scrolling, clicking buttons, and loading elements. The goal was to enhance the user experience with interactive and fluid transitions.
