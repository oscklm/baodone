import { StyleSheet } from "react-native-unistyles";

const baseUnit = 8;

const sharedColors = {
	primary: "#3DFF8E",
	primaryLight: "#95FFC1",
};

/**
 * For components, elements, avatars, etc.
 */
const sizes = {
	hair: 1, // 1px - for fine-grained control
	xxs: baseUnit * 2, // 16px - small size
	xs: baseUnit * 3, // 24px - tiny icons, badges
	sm: baseUnit * 4, // 32px - small buttons, icons
	md: baseUnit * 6, // 48px - standard buttons, input heights
	lg: baseUnit * 8, // 64px - large buttons, small cards
	xl: baseUnit * 12, // 96px - cards, modal widths
};

/**
 * For margins, padding, gaps between elements
 */
const spacing = {
	xxs: baseUnit * 0.25, // 2px - minimal separation
	xs: baseUnit * 0.5, // 4px - tight spacing
	sm: baseUnit, // 8px - default compact spacing
	md: baseUnit * 2, // 16px - standard spacing
	lg: baseUnit * 3, // 24px - generous spacing
	xl: baseUnit * 4, // 32px - section spacing
	xxl: baseUnit * 6, // 48px - large section spacing
};

const radius = {
	sm: baseUnit * 0.5, // 4px - small radius
	md: baseUnit * 1, // 8px - standard radius
	lg: baseUnit * 2, // 16px - large radius
	xl: baseUnit * 3, // 24px - extra large radius
};

const fontFamily = {
	primary: "Inter",
	accent: "Inter-Medium",
	mono: "JetBrains Mono",
};

const typography = {
	small: {
		fontFamily: fontFamily.primary,
		fontSize: 14,
		lineHeight: 20, // ~1.5 ratio
	},
	text: {
		fontFamily: fontFamily.primary,
		fontSize: baseUnit * 2, // 16px
		lineHeight: baseUnit * 3, // 24px, 1.5 ratio
	},
	h2: {
		fontFamily: fontFamily.accent,
		fontSize: baseUnit * 2.5, // 20px
		lineHeight: baseUnit * 4, // 32px, ~1.4 ratio
	},
	h1: {
		fontFamily: fontFamily.accent,
		fontSize: baseUnit * 3, // 24px
		lineHeight: baseUnit * 4, // 32px, ~1.3 ratio
	},
} as const;

const sharedValues = {
	radius,
	sizes,
	spacing,
	typography,
	fontFamily,
};

const lightTheme = {
	colors: {
		...sharedColors,
		background: "#E4E5E7",
		backgroundLight: "#FFFFFF",
		backgroundDark: "#313335",
		foreground: "#313335",
		foregroundLight: "#3D4042",
		foregroundDark: "#252628",
	},
	...sharedValues,
};

const darkTheme = {
	colors: {
		...sharedColors,
		background: "#313335",
		backgroundLight: "#3D4042",
		backgroundDark: "#252628",
		foreground: "#E4E5E7",
		foregroundLight: "#FFFFFF",
		foregroundDark: "#313335",
	},
	...sharedValues,
};

const appThemes = {
	light: lightTheme,
	dark: darkTheme,
};

const breakpoints = {
	xs: 0,
	sm: 480,
	md: 834,
	lg: 1440,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
	export interface UnistylesThemes extends AppThemes {}
	export interface UnistylesBreakpoints extends AppBreakpoints {}
	// Theme Variants
	export type SizezKeys = keyof typeof sizes;
	export type SpacingKeys = keyof typeof spacing;
	export type RadiusKeys = keyof typeof radius;
	export type TypographyKeys = keyof typeof typography;
}

StyleSheet.configure({
	settings: {
		adaptiveThemes: true,
	},
	breakpoints,
	themes: appThemes,
});
