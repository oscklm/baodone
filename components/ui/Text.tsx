import { Text as RNText, type TextProps as RNTextProps } from "react-native";
import { StyleSheet, UnistylesVariants } from "react-native-unistyles";
import type React from "react";
import { ColorContrast, ThemeComponent } from "@/unistyles";

interface TextProps extends RNTextProps, UnistylesVariants<typeof styles> {
  color?: ThemeComponent;
  contrast?: ColorContrast;
}

export const Text: React.FC<TextProps> = ({
  children,
  as,
  preset,
  color = "foreground",
  contrast = "base",
  style,
  ...props
}) => {
  styles.useVariants({
    as,
    preset,
  });

  return (
    <RNText style={styles.base(color, contrast)} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create((theme) => ({
  base: (color: ThemeComponent, contrast: ColorContrast) => ({
    color: theme.colors[color][contrast],
    variants: {
      as: {
        true: {
          textAlign: "center",
        },
      },
      preset: {
        h1: {
          fontFamily: theme.fontFamily.black,
          fontSize: 48, // 48px (3rem)
          lineHeight: 52, // 52px (3.25rem)
        },
        h2: {
          fontFamily: theme.fontFamily.black,
          fontSize: 40, // 40px (2.5rem)
          lineHeight: 44, // 44px (2.75rem)
        },
        h3: {
          fontFamily: theme.fontFamily.black,
          fontSize: 32, // 32px (2rem)
          lineHeight: 36, // 36px (2.25rem)
        },
        subtitle: {
          fontFamily: theme.fontFamily.bold,
          fontSize: 18, // 18px (1.125rem)
          lineHeight: 26, // 26px (1.625rem)
        },
        button: {
          fontFamily: theme.fontFamily.black,
          fontSize: 18, // 16px (1rem)
          lineHeight: 26, // 24px (1.5rem)
        },
        body: {
          fontFamily: theme.fontFamily.regular,
          fontSize: 16, // 16px (1rem)
          lineHeight: 24, // 24px (1.5rem)
        },
        small: {
          fontFamily: theme.fontFamily.regular,
          fontSize: 14, // 14px (0.875rem)
          lineHeight: 20, // 20px (1.25rem)
        },
      },
    },
  }),
}));
