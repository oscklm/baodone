import { FontFamily } from "@/unistyles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  type Theme,
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { useEffect } from "react";
import { Platform } from "react-native";
import "react-native-reanimated";
import { useUnistyles } from "react-native-unistyles";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    regular: require("../assets/fonts/BricolageGrotesque_24pt-Regular.ttf"),
    medium: require("../assets/fonts/BricolageGrotesque_24pt-Medium.ttf"),
    semibold: require("../assets/fonts/BricolageGrotesque_24pt-SemiBold.ttf"),
    bold: require("../assets/fonts/BricolageGrotesque_24pt-Bold.ttf"),
    black: require("../assets/fonts/BricolageGrotesque_24pt-ExtraBold.ttf"),
  } satisfies Record<FontFamily, string>);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { theme, rt } = useUnistyles();

  const navigationTheme: Theme = React.useMemo(
    () => ({
      fonts: {
        ...DefaultTheme.fonts,
      },
      dark: rt.colorScheme === "dark",
      colors: {
        background: theme.colors.background.base,
        text: theme.colors.foreground.base,
        border: theme.colors.foreground.base,
        card: theme.colors.background.base,
        notification: theme.colors.foreground.base,
        primary: theme.colors.primary.base,
      },
    }),
    [theme, rt]
  );

  return (
    <ThemeProvider value={navigationTheme}>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerTitle: () => null,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="help"
          options={{
            title: "Help",
            headerShown: Platform.OS === "web",
            presentation: "formSheet",
            sheetElevation: 24,
            sheetGrabberVisible: true,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
