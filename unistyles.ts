import { ViewStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export type FontFamily = 'regular' | 'medium' | 'bold' | 'semibold' | 'black';

export type ThemeComponent =
  | 'primary'
  | 'secondary'
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
    '50': '#f3f2ff',
    '100': '#e9e8ff',
    '200': '#d5d4ff',
    '300': '#b7b1ff',
    '400': '#9285ff',
    '500': '#8068ff',
    '600': '#5c30f7',
    '700': '#4e1ee3',
    '800': '#4118bf',
    '900': '#36169c',
    '950': '#1f0b6a',
  },
  green: {
    '50': '#e0ffeb',
    '100': '#c7ffdf',
    '200': '#a3ffc9',
    '300': '#6bffab',
    '400': '#15f476',
    '500': '#08bf57',
    '600': '#019842',
    '700': '#047135',
    '800': '#07542a',
    '900': '#074122',
    '950': '#00140a',
  },
  red: {
    '50': '#fff0f0',
    '100': '#ffe0e0',
    '200': '#ffc8c7',
    '300': '#ffa09e',
    '400': '#ff6e6b',
    '500': '#f84c49',
    '600': '#e6302d',
    '700': '#d01916',
    '800': '#ac1815',
    '900': '#931d1b',
    '950': '#540a08',
  },
  blue: {
    '50': '#edf8ff',
    '100': '#d7eeff',
    '200': '#b9e2ff',
    '300': '#88d2ff',
    '400': '#50b8ff',
    '500': '#2896ff',
    '600': '#0e76ff',
    '700': '#0a60eb',
    '800': '#0f4dbe',
    '900': '#134495',
    '950': '#112b5a',
  },
  orange: {
    '50': '#fff7eb',
    '100': '#ffe7c6',
    '200': '#ffcd88',
    '300': '#ffac49',
    '400': '#ff9020',
    '500': '#f96907',
    '600': '#dd4602',
    '700': '#b72c06',
    '800': '#94210c',
    '900': '#7a1d0d',
    '950': '#460b02',
  },
  yellow: {
    '50': '#fff8eb',
    '100': '#ffecc7',
    '200': '#ffd06b',
    '300': '#ffc247',
    '400': '#ffab1a',
    '500': '#f48d06',
    '600': '#d96a02',
    '700': '#b24b06',
    '800': '#8e390b',
    '900': '#73300c',
    '950': '#401902',
  },
  neutral: {
    '50': '#ffffff',
    '100': '#f6f7f9',
    '200': '#dfe1e7',
    '300': '#bbc1ce',
    '400': '#929cb0',
    '500': '#68758d',
    '600': '#545e73',
    '700': '#454c5f',
    '800': '#3a4150',
    '900': '#353a45',
    '950': '#23262f',
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
      light: colors.neutral['100'],
      base: colors.neutral['200'],
      dark: colors.neutral['300'],
    },
    button: {
      light: colors.neutral['600'],
      base: colors.neutral['300'],
      dark: colors.neutral['900'],
    },
    foreground: {
      light: colors.neutral['500'],
      base: colors.neutral['900'],
      dark: colors.neutral['900'],
    },
    primary: {
      light: colors.purple['400'],
      base: colors.purple['500'],
      dark: colors.purple['600'],
    },
    secondary: {
      light: colors.blue['400'],
      base: colors.blue['500'],
      dark: colors.blue['600'],
    },
    success: {
      light: colors.green['400'],
      base: colors.green['500'],
      dark: colors.green['600'],
    },
    warning: {
      light: colors.yellow['400'],
      base: colors.yellow['500'],
      dark: colors.yellow['600'],
    },
    error: {
      light: colors.red['400'],
      base: colors.red['500'],
      dark: colors.red['600'],
    },
  } satisfies ThemeColorConfig,
  ...sharedValues,
  ...sharedHelpers,
};

const darkTheme = {
  colors:{
    ...lightTheme.colors,
    background: {
      light: colors.neutral['800'],
      base: colors.neutral['900'],
      dark: colors.neutral['950'],
    },
    foreground: {
      light: colors.neutral['50'],
      base: colors.neutral['100'],
      dark: colors.neutral['200'],
    },
    button: {
      light: colors.neutral['500'],
      base: colors.neutral['600'],
      dark: colors.neutral['700'],
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
