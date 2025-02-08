import { ViewStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export type FontFamily = 'regular' | 'medium' | 'bold' | 'semibold' | 'black';

export type ThemeComponent =
  | 'primary'
  | 'background'
  | 'foreground'
  | 'button'
  | 'success'
  | 'warning'
  | 'error';

export type ColorContrast = 'light' | 'base' | 'dark';

type ThemeColorConfig = {
  [key in ThemeComponent]: {
    [key in ColorContrast]: string;
  };
};

type UnitValue = number | undefined;
type UnitToken = '$0' | '$025' | '$050' | '$100' | '$150' | '$200' | '$300' | '$400' | '$500' | '$600' | '$800';

type SizeToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type RadiusToken =  '$150' | '$200' | '$300' | '$full';


const BASE_UNIT = 8;

/**
 * Unit token values
 * An object of truth for all (size, spacing, etc)
 * All values are proportinally related to the base unit
 */
const units = {
  // Atomic scale
  $0: 0,
  $025: BASE_UNIT * 0.25,
  $050: BASE_UNIT * 0.5,
  
  // Base scale
  $100: BASE_UNIT,
  $150: BASE_UNIT * 1.5,
  $200: BASE_UNIT * 2,
  
  // Medium scale
  $300: BASE_UNIT * 3,
  $400: BASE_UNIT * 4, 

  // Large scale
  $500: BASE_UNIT * 5,
  $600: BASE_UNIT * 6,
  $800: BASE_UNIT * 8,

} as const satisfies Record<UnitToken, NonNullable<UnitValue>>;


/**
 * Size token values
 * used for icons, buttons, etc.
 */
const sizes = {
  xs: units.$100,
  sm: units.$200,
  md: units.$300,
  lg: units.$400,
  xl: units.$500,
} as const satisfies Record<SizeToken, NonNullable<UnitValue>>;

/**
 * Component radius aliases using units
 * Provides semantic names while maintaining single source of truth
 */
const radius = {
  $150: units.$150,
  $200: units.$200,
  $300: units.$300,
  $full: 9999,
} as const satisfies Record<RadiusToken, NonNullable<UnitValue>>;



const breakpoints = {
  xs: 0,
  sm: 480,
  md: 834,
  lg: 1440,
} as const;


/**
 * Font families
 * This maps to the names of the ones imported by expo useFonts hook
 */
const fontFamily = {
  regular: "regular",
  medium: "medium",
  bold: "semibold",
  black: "black",
} as const satisfies Partial<Record<FontFamily, FontFamily>>;

/**
 * Color token values
 * Provides semantic names while maintaining single source of truth
 */
export const colors = {
  purple: {
    '100': '#9CA0FF',
    '200': '#726EFF',
    '300': '#4E2CE8',
    '400': '#3503A8',
    '500': '#05006E',
  },
  light: {
    '100': '#FFF',
    '200': '#D0DEEB',
    '300': '#ADBBCC',
    '400': '#899AB3',
    '500': '#5A7091',
  },
  dark: {
    '100': '#899AB3',
    '200': '#5A7091',
    '300': '#43526E',
    '400': '#2F3A4D',
    '500': '#1A1A1A',
  },
  green: {
    '100': '#c7ffdf',
    '200': '#a3ffc9',
    '300': '#6bffab',
  },
  red: {
    '100': '#FF4F79',
    '200': '#C40D4D',
    '300': '#8C0041',
  },
  blue: {
    '100': '#d7eeff',
    '200': '#b9e2ff',
    '300': '#88d2ff',
  },
  orange: {
    '100': '#ffe7c6',
    '200': '#ffcd88', 
    '300': '#ffac49'
  },
  yellow: {
    '100': '#ffecc7',
    '200': '#ffd06b',
    '300': '#ffc247',
  },
  
} as const;



const sharedValues = {
  units,
  sizes,
  radius,
  fontFamily,
};


type KeysByPatterns<T, Patterns extends string[]> = Extract<keyof T, `${Patterns[number]}${string}`>;

type StyleProperties = KeysByPatterns<ViewStyle, ['border', 'margin', 'padding', 'gap']>;

/**
 * Creates a variant from a property
 * @param property - The property to create a variant from
 * @returns A variant from the property
 * @example
 * const variant = createVariantFromProperty('margin');
 * // { $0: { margin: 0 }, $025: { margin: 2 }, $050: { margin: 4 }, $100: { margin: 8 }, $150: { margin: 12 }, $200: { margin: 16 }, $300: { margin: 24 }, $400: { margin: 32 }, $500: { margin: 40 }, $600: { margin: 48 }, $800: { margin: 64 } }
 */
const createVariantFromProperty = <P extends StyleProperties>(property: P) => {
  return Object.entries(units).reduce((acc, [token, value]) => ({
    ...acc,
    [token]: { [property]: value }
  }), {}) as Record<UnitToken, { [K in P]: number }>;
};

const sharedHelpers = {
  createVariantFromProperty,
};



const lightTheme = {
  colors: {
    background: {
      light: colors.light['100'],
      base: colors.light['100'],
      dark: colors.light['200'],
    },
    button: {
      light: colors.light['100'],
      base: colors.light['200'],
      dark: colors.light['300'],
    },
    foreground: {
      light: colors.dark['500'],
      base: colors.dark['400'],
      dark: colors.dark['300'],
    },
    primary: {
      light: colors.purple['100'],
      base: colors.purple['200'],
      dark: colors.purple['300'],
    },
    success: {
      light: colors.green['100'],
      base: colors.green['200'],
      dark: colors.green['300'],
    },
    warning: {
      light: colors.yellow['100'],
      base: colors.yellow['200'],
      dark: colors.yellow['300'],
    },
    error: {
      light: colors.red['100'],
      base: colors.red['200'],
      dark: colors.red['300'],
    },
  } satisfies ThemeColorConfig,
  ...sharedValues,
  ...sharedHelpers,
};

const darkTheme = {
  colors:{
    ...lightTheme.colors,
    background: {
      light: colors.dark['200'],
      base: colors.dark['500'],
      dark: colors.dark['400'],
    },
    foreground: {
      light: colors.light['100'],
      base: colors.light['200'],
      dark: colors.light['300'],
    },
    button: {
      light: colors.dark['200'],
      base: colors.dark['300'],
      dark: colors.dark['400'],
    },
  },
  ...sharedValues,
  ...sharedHelpers,
};

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
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
