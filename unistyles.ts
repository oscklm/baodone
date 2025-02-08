import { StyleSheet } from "react-native-unistyles";

type Tokens = `$${0 | 25 | 50 | 100 | 150 | 200 | 300 | 400 | 500 | 600 | 800}`;

/**
 * Unified spacing/sizing scale with semantic categories
 * Combines size and spacing concepts into single source of truth
 * 
 * 
 * 
 */
const space = {
  // Atomic scale
  $0: 0,    // 0px
  $25: 2,   // 2px
  $50: 4,   // 4px
  
  // Base scale
  $100: 8,  // 8px
  $150: 12, // 12px
  $200: 16, // 16px
  
  // Medium scale
  $300: 24, // 24px
  $400: 32, // 32px
  
  // Large scale
  $500: 40, // 40px
  $600: 48, // 48px
  $800: 64, // 64px
} as const satisfies Record<Tokens, number>;


/**
 * Component size aliases using the unified scale
 * Provides semantic names while maintaining single source
 */
const sizes = {
  // Component sizes
  icon: {
    small: space.$100,
    medium: space.$200,
    large: space.$300,
  },
  button: {
    compact: space.$200,
    standard: space.$300,
    large: space.$400,
  },
  avatar: {
    small: space.$400,
    medium: space.$500,
    large: space.$600,
  },
} as const;


// ... existing code ...
const radius = {
  $025: 2, // 2px - small radius
  $050: 4, // 4px - standard radius
  $100: 8, // 8px - large radius
  $200: 16, // 16px - extra large radius
} as const;

const color = {
  purple: {
    100: "#BAA7F7",
    200: "#6F5BD9",
    300: "#5A46B9",
    400: "#453599",
    500: "#312479",
    600: "#2C2066",
    700: "#271C53",
  },
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

const sharedColors = {
  purple: color.purple,
  white: color.white,
  black: color.black,
};

const sharedValues = {
  radius,
  sizes,
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

}

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  breakpoints,
  themes: appThemes,
});
