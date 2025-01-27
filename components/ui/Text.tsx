import { Text as RNText, type TextProps as RNTextProps } from "react-native";
import {
	type ColorTokens,
	StyleSheet,
	type FontTokens,
	type FontSizeTokens,
} from "react-native-unistyles";
import type React from "react";

interface TextProps extends RNTextProps {
	variant?: FontTokens;
	size?: FontSizeTokens;
	color?: ColorTokens;
	as?: boolean;
}

export const Text: React.FC<TextProps> = ({
	children,
	variant = "body",
	size = "medium",
	as,
	color = "foreground",
	style,
	...props
}) => {
	styles.useVariants({
		alignSelf: as,
	});

	return (
		<RNText style={styles.base(variant, size, color)} {...props}>
			{children}
		</RNText>
	);
};

const styles = StyleSheet.create((theme, runtime) => ({
	base: (variant: FontTokens, size: FontSizeTokens, color: ColorTokens) => ({
		color: theme.colors[color],
		fontSize: theme.font[variant][size].fontSize,
		fontFamily: theme.font[variant][size].fontFamily,
		lineHeight: theme.font[variant][size].lineHeight,

		variants: {
			alignSelf: {
				true: {
					textAlign: "center",
				},
			},
		},
	}),
}));
