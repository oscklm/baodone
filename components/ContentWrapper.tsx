import { ThemeComponent } from "@/unistyles";
import type React from "react";
import { View } from "react-native";
import { StyleSheet, UnistylesVariants } from "react-native-unistyles";

type Variants = UnistylesVariants<typeof styles>;

interface ContentWrapperProps extends Variants {
  children: React.ReactNode;
  color?: ThemeComponent;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  disablePaddingX,
  disablePaddingY,
  insetTop,
  color,
}) => {
  styles.useVariants({
    disablePaddingX,
    disablePaddingY,
    insetTop,
  });
  return <View style={styles.container(color)}>{children}</View>;
};

const styles = StyleSheet.create((th, rt) => ({
  container: (color?: ThemeComponent) => ({
    flex: 1,
    backgroundColor: color && th.colors[color].base,
    variants: {
      disablePaddingX: {
        true: {},
        default: {
          paddingHorizontal: th.units.$200,
        },
      },
      disablePaddingY: {
        true: {},
        default: {
          paddingVertical: th.units.$200,
        },
      },
      insetTop: {
        true: {
          paddingTop: rt.insets.top,
          _web: {
            paddingTop: th.units.$200,
          },
        },
        default: {},
      },
    },
  }),
}));
