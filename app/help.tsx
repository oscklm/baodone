import { Text } from "@/components/ui/Text";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function HelpScreen() {
	return (
		<View style={styles.container}>
			<Text variant="heading" size="large" as>
				Help
			</Text>

			<View>
				<Text variant="heading" size="small">
					Section #1
				</Text>
				<Text variant="body" size="large">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
					quisquam deserunt ullam eos praesentium iure, enim mollitia tempora
					nisi beatae dolorem illo inventore asperiores officia eligendi
					adipisci corporis et ad!
				</Text>
			</View>
			<View>
				<Text variant="heading" size="small">
					Section #2
				</Text>
				<Text variant="body" size="large">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
					quisquam deserunt ullam eos praesentium iure, enim mollitia tempora
					nisi beatae dolorem illo inventore asperiores officia eligendi
					adipisci corporis et ad!
				</Text>
			</View>
			<View>
				<Text variant="heading" size="small">
					Section #3
				</Text>
				<Text variant="body" size="large">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
					quisquam deserunt ullam eos praesentium iure, enim mollitia tempora
					nisi beatae dolorem illo inventore asperiores officia eligendi
					adipisci corporis et ad!
				</Text>
			</View>
			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
		</View>
	);
}

const styles = StyleSheet.create((theme, runtime) => ({
	container: {
		flex: 1,
		padding: theme.space.$400,
		gap: theme.space.$200,
	},
}));
