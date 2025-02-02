import { ScreenHeader } from "@/components/ScreenHeader";
import { Stack, Button, Text } from "@/components/ui";
import { router } from "expo-router";
import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Box } from "@/components/ui/Box";

export default function TabOneScreen() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<ScreenHeader>
					<Text variant="heading" size="large">
						Baodone
					</Text>
				</ScreenHeader>
				<Box us={{ gap: "$200" }}>
					<Box
						us={{
							padding: "$200",
							borderRadius: "$200",
							backgroundColor: "primary",
						}}
					>
						<Text variant="heading" size="small" color="white">
							Your personal assistant
						</Text>
						<Text variant="body" size="medium" color="white">
							Baodone is a simple and easy-to-use app that helps you stay on top
							of your tasks and reminders. Whether you're a busy professional or
							a student, Baodone is here to help you stay organized and on top
							of your tasks.
						</Text>
					</Box>
					<Stack us={{ gap: "$300" }}>
						<Stack us={{ gap: "$300" }}>
							<Button title="Button 1" onPress={() => router.push("/help")} />
							<Button title="Button 2" onPress={() => router.push("/help")} />
						</Stack>
						<Stack horizontal wrap="wrap" us={{ gap: "$300" }}>
							<Button title="Button 3" onPress={() => router.push("/help")} />
							<Button title="Button 3" onPress={() => router.push("/help")} />
							<Button title="Button 3" onPress={() => router.push("/help")} />
						</Stack>
						<Stack horizontal us={{ gap: "$300" }}>
							<Button title="Button 4" onPress={() => router.push("/help")} />
							<Button title="Button 5" onPress={() => router.push("/help")} />
						</Stack>
					</Stack>
				</Box>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create((theme, runtime) => ({
	container: {
		padding: theme.space.$200,
		gap: theme.space.$100,
	},
	buttonContainer: {
		flexDirection: "row",
		paddingVertical: theme.space.$200,
		marginHorizontal: theme.space.$400,
	},
}));
