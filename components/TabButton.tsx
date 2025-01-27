import type { TabTriggerSlotProps } from "expo-router/ui";
import { Pressable, type View } from "react-native";
import { forwardRef } from "react";
import { StyleSheet } from "react-native-unistyles";
import { Icons } from "./icons";
import { Text } from "./ui/Text";

type Icon = keyof typeof Icons;

type TabButtonProps = TabTriggerSlotProps & {
	icon: Icon;
};

export const TabButton = forwardRef<View, TabButtonProps>(
	({ children, isFocused, icon, style, ...props }, ref) => {
		const Icon = Icons[icon];

		styles.useVariants({
			isFocused,
		});

		return (
			<Pressable {...props} style={styles.container}>
				<Icon size={21} color={styles.icon.color} />
			</Pressable>
		);
	},
);

const styles = StyleSheet.create((theme, runtime) => ({
	container: {
		flex:
			runtime.breakpoint === "xs" || runtime.breakpoint === "sm"
				? 1
				: undefined,
		alignItems: "center",
		justifyContent: "center",
		gap: theme.space.$100,
		paddingVertical: theme.space.$200,
		borderRadius: theme.radius.$100,
		flexDirection:
			runtime.breakpoint === "xs" || runtime.breakpoint === "sm"
				? "column"
				: "row",
		variants: {
			isFocused: {
				true: {
					backgroundColor: theme.colors.backgroundLight,
				},
				false: {
					backgroundColor: theme.colors.background,
				},
			},
		},
	},
	icon: {
		color: theme.colors.foreground,
	},
}));
