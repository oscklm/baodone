import { Text } from "@/components/ui/Text";
import { router } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Text variant="text">Tab One</Text>
			<Button title="Help" onPress={() => router.push("/help")} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
