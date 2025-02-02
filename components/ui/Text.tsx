import { Text as RNText, type TextProps as RNTextProps } from "react-native";
import {
  type ColorTokens,
  StyleSheet,
  type FontTokens,
} from "react-native-unistyles";
import type React from "react";

interface TextProps extends RNTextProps {
  variant?: FontTokens;
  color?: ColorTokens;
  invert?: boolean;
  as?: boolean;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  as,
  color = "foreground",
  style,
  ...props
}) => {
  styles.useVariants({
    alignSelf: as,
  });

  return (
    <RNText style={styles.base(variant, color)} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create((theme) => ({
  base: (variant: FontTokens, color: ColorTokens) => ({
    color: theme.colors[color],
    fontSize: theme.font[variant].fontSize,
    fontFamily: theme.font[variant].fontFamily,
    lineHeight: theme.font[variant].lineHeight,
    variants: {
      alignSelf: {
        true: {
          textAlign: "center",
        },
      },
    },
  }),
}));
