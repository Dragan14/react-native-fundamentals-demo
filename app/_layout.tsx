import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { ToastProvider } from "@/context/ToastContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AlertProvider } from "@/context/AlertContext";

function App() {
  const { theme, isDark } = useTheme();
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ToastProvider>
          <AlertProvider>
            <StatusBar
              style={isDark ? "light" : "dark"}
              backgroundColor={theme.colors.background}
            />
            <Stack
              screenOptions={{
                navigationBarColor: theme.colors.background,
                headerStyle: {
                  backgroundColor: theme.colors.background,
                },
                headerTintColor: theme.colors.primary,
                headerTitleStyle: { color: theme.colors.onBackground },
              }}
            >
              <Stack.Screen
                name="index"
                options={{ title: "Home", headerShown: false }}
              />
              <Stack.Screen name="button" options={{ title: "Button" }} />
              <Stack.Screen
                name="textinput"
                options={{ title: "Text Input" }}
              />
              <Stack.Screen name="text" options={{ title: "Text" }} />
              <Stack.Screen
                name="segmentedcontrol"
                options={{ title: "Segmented Control" }}
              />
              <Stack.Screen name="switch" options={{ title: "Switch" }} />
              <Stack.Screen name="toast" options={{ title: "Toast" }} />
              <Stack.Screen name="alert" options={{ title: "Alert" }} />
              <Stack.Screen
                name="radiobutton"
                options={{ title: "Radio Button" }}
              />
              <Stack.Screen
                name="+not-found"
                options={{ title: "Not Found", headerShown: false }}
              />
            </Stack>
          </AlertProvider>
        </ToastProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
