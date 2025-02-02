import { StyleSheet } from "react-native-unistyles";

/**
 * Base sizing units for the design system based on 8 pixel grid.
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
  $025: 2, // 2px  - borders, small details
  $050: 4, // 4px  - thin borders, hairlines

  // Small components and icons
  $100: 8, // 8px  - smallest interactive size
  $150: 12, // 12px - small icons
  $200: 16, // 16px - standard icons, small buttons

  // Medium components
  $300: 24, // 24px - medium icons
  $400: 32, // 32px - avatars, buttons

  // Large components
  $500: 40, // 40px - large interactive elements
  $600: 48, // 48px - large buttons, input heights

  // Extra large components
  $800: 64, // 64px - large avatars, featured elements
  $1000: 80, // 80px - extra large components
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
  $025: 2, // 2px  (0.25x)
  $050: 4, // 4px  (0.5x)
  $075: 6, // 6px  (0.75x)
  $100: 8, // 8px  (1x) - base spacing unit
  $150: 12, // 12px (1.5x)
  $200: 16, // 16px (2x)
  $250: 20, // 20px (2.5x)
  $300: 24, // 24px (3x)
  $400: 32, // 32px (4x)
  $500: 40, // 40px (5x)
  $600: 48, // 48px (6x)
  $800: 64, // 64px (8x)
  "-$025": -2, // -2px
  "-$050": -4, // -4px
  "-$075": -6, // -6px
  "-$100": -8, // -8px
  "-$150": -12, // -12px
  "-$200": -16, // -16px
  "-$250": -20, // -20px
  "-$300": -24, // -24px
  "-$400": -32, // -32px
} as const;

const radius = {
  $025: 2, // 2px - small radius
  $050: 4, // 4px - standard radius
  $100: 8, // 8px - large radius
  $200: 16, // 16px - extra large radius
} as const;

const sharedColors = {
  primary: "#6F5BD9",
  primaryLight: "#BAA7F7",
  white: "#E4E5E7",
  black: "#313335",
};

const fontFamily = {
  regular: "BricoRegular",
  medium: "BricoMedium",
  bold: "BricoSemiBold",
  black: "BricoExtraBold",
};

const font = {
  h1: {
    fontFamily: fontFamily.black,
    fontSize: 48, // 48px (3rem)
    lineHeight: 52, // 52px (3.25rem)
  },
  h2: {
    fontFamily: fontFamily.black,
    fontSize: 40, // 40px (2.5rem)
    lineHeight: 44, // 44px (2.75rem)
  },
  h3: {
    fontFamily: fontFamily.black,
    fontSize: 32, // 32px (2rem)
    lineHeight: 36, // 36px (2.25rem)
  },
  subtitle: {
    fontFamily: fontFamily.bold,
    fontSize: 18, // 18px (1.125rem)
    lineHeight: 26, // 26px (1.625rem)
  },
  button: {
    fontFamily: fontFamily.black,
    fontSize: 18, // 16px (1rem)
    lineHeight: 26, // 24px (1.5rem)
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: 16, // 16px (1rem)
    lineHeight: 24, // 24px (1.5rem)
  },
  small: {
    fontFamily: fontFamily.regular,
    fontSize: 14, // 14px (0.875rem)
    lineHeight: 20, // 20px (1.25rem)
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
  export type ColorTokens = keyof typeof lightTheme.colors;
}

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  breakpoints,
  themes: appThemes,
});
