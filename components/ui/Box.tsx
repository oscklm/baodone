import * as React from "react";
import { View, type ViewProps, type ViewStyle } from "react-native";
import {
	type ColorTokens,
	type RadiusTokens,
	type SizeTokens,
	type SpaceTokens,
	StyleSheet,
	type UnistylesThemes,
} from "react-native-unistyles";

type StylePropsWithUnistyles = {
	readonly gap?: SpaceTokens;
	readonly rowGap?: SpaceTokens;
	readonly columnGap?: SpaceTokens;
	readonly padding?: SpaceTokens;
	readonly paddingX?: SpaceTokens;
	readonly paddingY?: SpaceTokens;
	readonly paddingTop?: SpaceTokens;
	readonly paddingBottom?: SpaceTokens;
	readonly paddingLeft?: SpaceTokens;
	readonly paddingRight?: SpaceTokens;
	readonly paddingEnd?: SpaceTokens;
	readonly paddingStart?: SpaceTokens;
	readonly margin?: SpaceTokens;
	readonly marginX?: SpaceTokens;
	readonly marginY?: SpaceTokens;
	readonly marginTop?: SpaceTokens;
	readonly marginBottom?: SpaceTokens;
	readonly marginLeft?: SpaceTokens;
	readonly marginRight?: SpaceTokens;
	readonly marginStart?: SpaceTokens;
	readonly marginEnd?: SpaceTokens;
	readonly backgroundColor?: ColorTokens;
	readonly borderRadius?: RadiusTokens;
	readonly borderTopLeftRadius?: RadiusTokens;
	readonly borderTopRightRadius?: RadiusTokens;
	readonly borderBottomLeftRadius?: RadiusTokens;
	readonly borderBottomRightRadius?: RadiusTokens;
	readonly borderWidth?: SizeTokens;
	readonly borderTopWidth?: SizeTokens;
	readonly borderRightWidth?: SizeTokens;
	readonly borderBottomWidth?: SizeTokens;
	readonly borderLeftWidth?: SizeTokens;
	readonly borderColor?: ColorTokens;
};

export type BoxProps = ViewProps & {
	readonly us?: StylePropsWithUnistyles; // Unistyles powered style props

	readonly as?: React.ElementType; // Allow any component type
	readonly width?: ViewStyle["width"];
	readonly height?: ViewStyle["height"];
	readonly alignX?: ViewStyle["alignItems"];
	readonly alignY?: ViewStyle["justifyContent"];
	readonly direction?: ViewStyle["flexDirection"];
	readonly wrap?: ViewStyle["flexWrap"];
	readonly flex?: ViewStyle["flex"];
};

// Add at the top of the file or in a separate utils file
const getThemeValue = <T extends keyof UnistylesThemes["light"]>(
	theme: UnistylesThemes["light"],
	token: keyof UnistylesThemes["light"][T] | undefined,
	category: T,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
): any | undefined => {
	return token ? theme[category][token] : undefined;
};

export const Box = React.forwardRef<View, BoxProps>((props, ref) => {
	const {
		children,
		us,
		style,
		width,
		height,
		alignX,
		alignY,
		direction,
		wrap,
		flex,
		...rest
	} = props;
	return (
		<View
			{...rest}
			ref={ref}
			style={[
				us && styles.root(us),
				{
					...(width && { width }),
					...(height && { height }),
					...(alignX && { alignItems: alignX }),
					...(alignY && { justifyContent: alignY }),
					...(direction && { flexDirection: direction }),
					...(wrap && { flexWrap: wrap }),
					...(flex !== undefined && { flex }),
				},
				style,
			]}
		>
			{children}
		</View>
	);
});

Box.displayName = "Box";

const styles = StyleSheet.create((theme, runtime) => ({
	root: (props: StylePropsWithUnistyles) => ({
		gap: getThemeValue(theme, props.gap, "space"),
		rowGap: getThemeValue(theme, props.rowGap, "space"),
		columnGap: getThemeValue(theme, props.columnGap, "space"),
		padding: getThemeValue(theme, props.padding, "space"),
		paddingHorizontal: getThemeValue(theme, props.paddingX, "space"),
		paddingVertical: getThemeValue(theme, props.paddingY, "space"),
		paddingTop: getThemeValue(theme, props.paddingTop, "space"),
		paddingBottom: getThemeValue(theme, props.paddingBottom, "space"),
		paddingLeft: getThemeValue(theme, props.paddingLeft, "space"),
		paddingRight: getThemeValue(theme, props.paddingRight, "space"),
		paddingEnd: getThemeValue(theme, props.paddingEnd, "space"),
		paddingStart: getThemeValue(theme, props.paddingStart, "space"),
		margin: getThemeValue(theme, props.margin, "space"),
		marginHorizontal: getThemeValue(theme, props.marginX, "space"),
		marginVertical: getThemeValue(theme, props.marginY, "space"),
		marginTop: getThemeValue(theme, props.marginTop, "space"),
		marginBottom: getThemeValue(theme, props.marginBottom, "space"),
		marginLeft: getThemeValue(theme, props.marginLeft, "space"),
		marginRight: getThemeValue(theme, props.marginRight, "space"),
		marginStart: getThemeValue(theme, props.marginStart, "space"),
		marginEnd: getThemeValue(theme, props.marginEnd, "space"),
		backgroundColor: getThemeValue(theme, props.backgroundColor, "colors"),
		borderRadius: getThemeValue(theme, props.borderRadius, "radius"),
		borderTopLeftRadius: getThemeValue(
			theme,
			props.borderTopLeftRadius,
			"radius",
		),
		borderTopRightRadius: getThemeValue(
			theme,
			props.borderTopRightRadius,
			"radius",
		),
		borderBottomLeftRadius: getThemeValue(
			theme,
			props.borderBottomLeftRadius,
			"radius",
		),
		borderBottomRightRadius: getThemeValue(
			theme,
			props.borderBottomRightRadius,
			"radius",
		),
		borderWidth: getThemeValue(theme, props.borderWidth, "size"),
		borderTopWidth: getThemeValue(theme, props.borderTopWidth, "size"),
		borderRightWidth: getThemeValue(theme, props.borderRightWidth, "size"),
		borderBottomWidth: getThemeValue(theme, props.borderBottomWidth, "size"),
		borderLeftWidth: getThemeValue(theme, props.borderLeftWidth, "size"),
		borderColor: getThemeValue(theme, props.borderColor, "colors"),
	}),
}));
