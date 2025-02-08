import type { TabTriggerSlotProps } from "expo-router/ui";
import { Pressable, type View } from "react-native";
import { forwardRef } from "react";
import { StyleSheet } from "react-native-unistyles";
import { Icons } from "./icons";

type Icon = keyof typeof Icons;

type TabButtonProps = TabTriggerSlotProps & {
  icon: Icon;
  position?: "first" | "last" | "middle";
};

export const TabButton = forwardRef<View, TabButtonProps>(
  ({ children, isFocused, icon, style, position, ...props }, ref) => {
    const Icon = Icons[icon];

    styles.useVariants({
      isFocused,
      position,
    });

    return (
      <Pressable ref={ref} {...props} style={styles.container}>
        <Icon size={21} color={styles.icon.color} />
      </Pressable>
    );
  }
);

const styles = StyleSheet.create((theme, runtime) => ({
  container: {
    flex: {
      xs: 1,
      md: 0,
    },
    minHeight: {
      xs: 0,
      md: 60,
    },
    alignItems: "center",
    justifyContent: "center",
    gap: theme.units.$100,
    paddingVertical: theme.units.$200,
    flexDirection:
      runtime.breakpoint === "xs" || runtime.breakpoint === "sm"
        ? "column"
        : "row",
    variants: {
      isFocused: {
        true: {
          backgroundColor: theme.colors.primary.base,
        },
        false: {
          backgroundColor: theme.colors.background.dark,
        },
      },
      position: {
        first: {
          borderTopLeftRadius: {
            xs: theme.radius.$150,
            md: theme.radius.$150,
          },
          borderTopRightRadius: theme.radius.$150,
          borderBottomRightRadius: theme.radius.$150,
          borderBottomLeftRadius: {
            xs: theme.radius.$150 * 3,
            md: theme.radius.$150,
          },
        },
        last: {
          borderTopRightRadius: {
            xs: theme.radius.$150,
            md: theme.radius.$150,
          },
          borderTopLeftRadius: theme.radius.$150,
          borderBottomLeftRadius: theme.radius.$150,
          borderBottomRightRadius: {
            xs: theme.radius.$150 * 3,
            md: theme.radius.$150,
          },
        },
        middle: {
          borderRadius: theme.radius.$200,
        },
        default: {},
      },
    },
  },
  icon: {
    variants: {
      isFocused: {
        true: {
          color: theme.colors.foreground.dark,
        },
        false: {
          color: theme.colors.foreground.light,
        },
      },
    },
  },
}));
