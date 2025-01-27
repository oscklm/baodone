import { StyleSheet } from "react-native-unistyles";

/**
 * Base unit for the design system.
 *
 * This is the smallest unit of measurement in the design system.
 * It is used to create consistent spacing and sizing throughout the design system.
 */
const baseUnit = 8;

/**
 * Base sizing units for the design system.
 *
 * Values are intentionally skipped in this scale for several reasons:
 * 1. Meaningful Increments: Limited options enforce consistency and visual harmony
 * 2. Cognitive Load: A curated set of values is easier to remember and work with
 * 3. Logarithmic Progression: Gaps between values increase as numbers get bigger because:
 *    - Small adjustments (2px vs 4px) matter more at small scales
 *    - Larger sizes (40px vs 48px) don't need as fine-grained control
 */
const size = {
	// Atomic sizes (for borders, small details)
	$0: 0, // 0px
	$025: baseUnit * 0.25, // 2px  - borders, small details
	$050: baseUnit * 0.5, // 4px  - thin borders, hairlines

	// Small components and icons
	$100: baseUnit, // 8px  - smallest interactive size
	$150: baseUnit * 1.5, // 12px - small icons
	$200: baseUnit * 2, // 16px - standard icons, small buttons

	// Medium components
	$300: baseUnit * 3, // 24px - medium icons
	$400: baseUnit * 4, // 32px - avatars, buttons

	// Large components
	$500: baseUnit * 5, // 40px - large interactive elements
	$600: baseUnit * 6, // 48px - large buttons, input heights

	// Extra large components
	$800: baseUnit * 8, // 64px - large avatars, featured elements
	$1000: baseUnit * 10, // 80px - extra large components
} as const;

/**
 * For margins, padding, gaps between elements.
 *
 * Follows the same spacing philosophy as the size scale:
 * - Very fine control at small sizes (025, 050, 075)
 * - Medium steps in the middle range (100, 150, 200)
 * - Larger jumps at the end (600, 800, 1000)
 */
const space = {
	$0: 0, // 0px
	$025: baseUnit * 0.25, // 2px  (0.25x)
	$050: baseUnit * 0.5, // 4px  (0.5x)
	$075: baseUnit * 0.75, // 6px  (0.75x)
	$100: baseUnit, // 8px  (1x)
	$150: baseUnit * 1.5, // 12px (1.5x)
	$200: baseUnit * 2, // 16px (2x)
	$250: baseUnit * 2.5, // 20px (2.5x)
	$300: baseUnit * 3, // 24px (3x)
	$400: baseUnit * 4, // 32px (4x)
	$500: baseUnit * 5, // 40px (5x)
	$600: baseUnit * 6, // 48px (6x)
	$800: baseUnit * 8, // 64px (8x)
	negative: {
		$025: baseUnit * -0.25, // -2px - negate parent whitespace or overlap small pieces of UI
		$050: baseUnit * -0.5, // -4px - negate parent whitespace or overlap small pieces of UI
		$075: baseUnit * -0.75, // -6px - negate parent whitespace or overlap small pieces of UI
		$100: baseUnit * -1, // -8px - negate parent whitespace or overlap small pieces of UI
		$150: baseUnit * -1.5, // -12px - negate parent whitespace or overlap larger pieces of UI
		$200: baseUnit * -2, // -16px - negate parent whitespace or overlap larger pieces of UI
		$250: baseUnit * -2.5, // -20px - negate parent whitespace or overlap larger pieces of UI
		$300: baseUnit * -3, // -24px - negate parent whitespace or overlap larger pieces of UI
		$400: baseUnit * -4, // -32px - negate parent whitespace or overlap the largest pieces of UI
	},
} as const;

const radius = {
	$025: baseUnit * 0.25, // 2px - small radius
	$050: baseUnit * 0.5, // 4px - standard radius
	$100: baseUnit * 1, // 8px - large radius
	$200: baseUnit * 2, // 16px - extra large radius
};

const sharedColors = {
	primary: "#3DFF8E",
	primaryLight: "#95FFC1",
};

const fontFamily = {
	regular: "OswaldRegular",
	medium: "Inter-Medium",
	bold: "Inter-Bold",
	black: "Onramp",
};

const font = {
	heading: {
		large: {
			fontFamily: fontFamily.black, // Bold
			fontSize: baseUnit * 6, // 48px (3rem)
			lineHeight: baseUnit * 6.5, // 52px (3.25rem)
		},
		medium: {
			fontFamily: fontFamily.black, // Bold
			fontSize: baseUnit * 5, // 40px (2.5rem)
			lineHeight: baseUnit * 5.5, // 44px (2.75rem)
		},
		small: {
			fontFamily: fontFamily.black, // Bold
			fontSize: baseUnit * 4, // 32px (2rem)
			lineHeight: baseUnit * 4.5, // 36px (2.25rem)
		},
	},
	body: {
		large: {
			fontFamily: fontFamily.regular, // Regular
			fontSize: baseUnit * 2, // 16px (1rem)
			lineHeight: baseUnit * 3, // 24px (1.5rem)
		},
		medium: {
			fontFamily: fontFamily.regular, // Regular
			fontSize: baseUnit * 1.75, // 14px (0.875rem)
			lineHeight: baseUnit * 2.5, // 20px (1.25rem)
		},
		small: {
			fontFamily: fontFamily.regular, // Regular
			fontSize: baseUnit * 1.5, // 12px (0.75rem)
			lineHeight: baseUnit * 2, // 16px (1rem)
		},
	},
} as const;

const sharedValues = {
	radius,
	size,
	space,
	font,
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
	export type SizeTokens = keyof typeof size;
	export type SpaceTokens = keyof typeof space;
	export type RadiusTokens = keyof typeof radius;
	export type FontTokens = keyof typeof font;
	export type FontSizeTokens = keyof typeof font.body;
	export type ColorTokens = keyof typeof lightTheme.colors;
}

StyleSheet.configure({
	settings: {
		adaptiveThemes: true,
	},
	breakpoints,
	themes: appThemes,
});
