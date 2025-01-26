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
import React, { useMemo } from "react";
import { useEffect } from "react";
import { Appearance, Platform } from "react-native";
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
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

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
				background: theme.colors.background,
				text: theme.colors.foreground,
				border: theme.colors.foreground,
				card: theme.colors.background,
				notification: theme.colors.foreground,
				primary: theme.colors.primary,
			},
		}),
		[theme, rt],
	);

	return (
		<ThemeProvider value={navigationTheme}>
			<Stack
				screenOptions={{
					headerShadowVisible: false,
				}}
			>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen
					name="help"
					options={{ title: "Help", presentation: "modal" }}
				/>
			</Stack>
		</ThemeProvider>
	);
}
