import { Text as RNText, type TextProps as RNTextProps } from "react-native";
import {
	StyleSheet,
	UnistylesThemes,
	type TypographyKeys,
	type UnistylesVariants,
} from "react-native-unistyles";
import type React from "react";

interface TextProps extends RNTextProps {
	variant?: TypographyKeys;
}

export const Text: React.FC<TextProps> = ({
	children,
	variant = "text",
	style,
	...props
}) => {
	return (
		<RNText style={styles.base(variant)} {...props}>
			{children}
		</RNText>
	);
};

const styles = StyleSheet.create((theme, runtime) => ({
	base: (variant: TypographyKeys = "text") => ({
		color: theme.colors.foreground,
		fontSize: theme.typography[variant].fontSize,
		lineHeight: theme.typography[variant].lineHeight,
	}),
}));
