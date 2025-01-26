import type { TabTriggerSlotProps } from "expo-router/ui";
import { Pressable, type View, type ViewStyle } from "react-native";
import { forwardRef } from "react";
import { StyleSheet } from "react-native-unistyles";
import { Icons } from "./icons";
import { Text } from "./ui/Text";

type Icon = keyof typeof Icons;

type TabButtonProps = TabTriggerSlotProps & {
	icon: Icon;
};

export const TabButton = forwardRef<View, TabButtonProps>(
	({ children, isFocused, icon, ...props }, ref) => {
		const Icon = Icons[icon];

		styles.useVariants({
			isFocused,
		});

		return (
			<Pressable
				{...props}
				style={({ pressed, hovered }) => [
					styles.container,
					pressed ? styles.pressed : {},
					hovered ? styles.hovered : {},
				]}
			>
				<Icon size={21} color={styles.icon.color} />
				<Text>{children}</Text>
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
		gap: theme.spacing.xs,
		padding: theme.spacing.xs,
		borderRadius: theme.radius.md,
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
	pressed: {
		opacity: 0.8,
	},
	hovered: {
		backgroundColor: theme.colors.backgroundLight,
	},
	icon: {
		color: theme.colors.foreground,
	},
}));
