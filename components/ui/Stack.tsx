import { View, type ViewProps } from "react-native";
import {
  type SizeTokens,
  type SpaceTokens,
  StyleSheet,
  type ColorTokens,
} from "react-native-unistyles";
import type React from "react";

interface Tokens {
  paddingY?: SpaceTokens;
  paddingX?: SpaceTokens;
  padding?: SpaceTokens;
  marginY?: SpaceTokens;
  marginX?: SpaceTokens;
  margin?: SpaceTokens;
  bgColor?: ColorTokens;
}

interface StackProps extends ViewProps, Tokens {}

export const Stack: React.FC<StackProps> = ({
  children,
  paddingY,
  paddingX,
  padding,
  marginY,
  marginX,
  margin,
  bgColor,
  style,
  ...props
}) => {
  return (
    <View
      style={styles.base({
        paddingY,
        paddingX,
        padding,
        marginY,
        marginX,
        margin,
        bgColor,
      })}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create((theme, runtime) => ({
  base: (tokens: Tokens) => ({
    backgroundColor: tokens.bgColor ? theme.colors[tokens.bgColor] : undefined,
    paddingVertical: theme.space[tokens.paddingY || tokens.padding || "$0"],
    paddingHorizontal: theme.space[tokens.paddingX || tokens.padding || "$0"],
    padding: theme.space[tokens.padding || "$0"],
    marginVertical: theme.space[tokens.marginY || tokens.margin || "$0"],
    marginHorizontal: theme.space[tokens.marginX || tokens.margin || "$0"],
    margin: theme.space[tokens.margin || "$0"],
  }),
}));

export default Stack;
