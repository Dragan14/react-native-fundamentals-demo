# React Native Fundamentals Demo Project

This is a demo project to showcase the React Native Fundamentals components.

- Component Library: [https://github.com/Dragan14/react-native-fundamentals](https://github.com/Dragan14/react-native-fundamentals)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js and npm/yarn](https://nodejs.org/)

## Getting Started

1.  **Clone the project:**

    ```bash
    git clone https://github.com/Dragan14/react-native-fundamentals-demo.git
    cd react-native-fundamentals-demo
    ```

2.  **Install the dependencies:**

    ```bash
    npm install
    ```

3.  **Add the React Native Fundamentals components.**
    Run the following command to add all the components:
    ```bash
    npx react-native-fundamentals add all
    ```

## Running the App

### With Expo Go

After setting up, simply run:

```bash
npx expo start
```

Choose whether you want to run on an Android device, iOS simulator, or web. If you have not set up an Android or iOS emulator, running the app on the web is recommended.

### Without Expo Go (Bare Workflow)

If you want to run the app without Expo Go:

1.  **Prebuild the project:**

    ```bash
    npx expo prebuild
    ```

2.  **Run on a specific platform:**
    - For iOS:
      ```bash
      npx expo run:ios
      ```
    - For Android:
      ```bash
      npx expo run:android
      ```

## Emulator Setup

- **Android Emulator -** Follow this guide: [Android Studio Emulator Setup](https://docs.expo.dev/workflow/android-studio-emulator/)
- **iOS Simulator (macOS required) -** Follow this guide: [iOS Simulator Setup](https://docs.expo.dev/workflow/ios-simulator/)

## License

This project is licensed under the [MIT License](LICENSE).
