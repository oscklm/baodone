import type React from "react";
import {
	Pressable,
	type PressableStateCallbackType,
	type PressableProps,
	View,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Text } from "./Text";

interface ButtonViewProps {
	title: string;
	pressableState: PressableStateCallbackType;
}

const ButtonView: React.FC<ButtonViewProps> = ({ title, pressableState }) => {
	styles.useVariants({
		pressed: pressableState.pressed,
		hovered: pressableState.hovered,
	});

	return (
		<View style={styles.buttonView}>
			<Text variant="heading" size="small" color="background" numberOfLines={1}>
				{title}
			</Text>
		</View>
	);
};

interface ButtonProps extends PressableProps {
	title: string;
}

export const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
	return (
		<Pressable {...props} style={styles.container}>
			{(state) => <ButtonView title={title} pressableState={state} />}
		</Pressable>
	);
};

const styles = StyleSheet.create((theme, runtime) => ({
	container: {
		flexGrow: 1,
	},
	buttonView: {
		borderRadius: theme.radius.$100,
		paddingVertical: theme.space.$200,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.colors.foregroundLight,
		variants: {
			pressed: {
				true: {
					opacity: 0.8,
				},
			},
			hovered: {
				true: {
					backgroundColor: theme.colors.foreground,
				},
			},
		},
	},
}));
