import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { router } from "expo-router";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Text variant="heading" size="large">
				Heading Large
			</Text>
			<Text variant="heading" size="medium">
				Heading Medium
			</Text>
			<Text variant="heading" size="small">
				Heading Small
			</Text>
			<Text variant="body" size="large">
				Lorem medium dolor sit, amet consectetur adipisicing elit. Aspernatur,
				id. Possimus, dolore.
			</Text>
			<Text variant="body" size="medium">
				Lorem medium dolor sit, amet consectetur adipisicing elit. Aspernatur,
				id. Possimus, dolore.
			</Text>
			<Text variant="body" size="small">
				Lorem medium dolor sit, amet consectetur adipisicing elit. Aspernatur,
				id. Possimus, dolore.
			</Text>
			<View style={styles.buttonContainer}>
				<Button title="Help" onPress={() => router.push("/help")} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create((theme, runtime) => ({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: theme.space.$300,
		gap: theme.space.$100,
	},
	buttonContainer: {
		paddingVertical: theme.space.$200,
		marginHorizontal: theme.space.$400,
	},
}));
