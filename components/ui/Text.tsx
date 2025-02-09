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
  preset = "body",
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

const styles = StyleSheet.create((th) => ({
  base: (color: ThemeComponent, contrast: ColorContrast) => ({
    color: th.colors[color][contrast],
    variants: {
      as: {
        true: {
          textAlign: "center",
        },
      },
      preset: {
        h1: {
          fontFamily: th.fontFamily.black,
          fontSize: th.useFontScale(3), // 48px (3rem)
          lineHeight: th.useFontScale(3.25), // 52px (3.25rem)
        },
        h2: {
          fontFamily: th.fontFamily.black,
          fontSize: th.useFontScale(2.5), // 40px (2.5rem)
          lineHeight: th.useFontScale(2.75), // 44px (2.75rem)
        },
        h3: {
          fontFamily: th.fontFamily.black,
          fontSize: th.useFontScale(2), // 32px (2rem)
          lineHeight: th.useFontScale(2.25), // 36px (2.25rem)
        },
        h4: {
          fontFamily: th.fontFamily.black,
          fontSize: th.useFontScale(1.5), // 24px (1.5rem)
          lineHeight: th.useFontScale(1.75), // 28px (1.75rem)
        },
        subtitle: {
          fontFamily: th.fontFamily.bold,
          fontSize: th.useFontScale(1.125), // 18px (1.125rem)
          lineHeight: th.useFontScale(1.625), // 26px (1.625rem)
        },
        button: {
          fontFamily: th.fontFamily.black,
          fontSize: th.useFontScale(1), // 16px (1rem)
          lineHeight: th.useFontScale(1.5), // 24px (1.5rem)
        },
        body: {
          fontFamily: th.fontFamily.regular,
          fontSize: th.useFontScale(1), // 16px (1rem)
          lineHeight: th.useFontScale(1.5), // 24px (1.5rem)
        },
        small: {
          fontFamily: th.fontFamily.regular,
          fontSize: th.useFontScale(0.875), // 14px (0.875rem)
          lineHeight: th.useFontScale(1.25), // 20px (1.25rem)
        },
      },
    },
  }),
}));
