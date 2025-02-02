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
  },
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
    gap: theme.space.$100,
    paddingVertical: theme.space.$200,
    flexDirection:
      runtime.breakpoint === "xs" || runtime.breakpoint === "sm"
        ? "column"
        : "row",
    variants: {
      isFocused: {
        true: {
          backgroundColor: theme.colors.primary,
        },
        false: {
          backgroundColor: theme.colors.backgroundLight,
        },
      },
      position: {
        first: {
          borderTopLeftRadius: {
            xs: theme.radius.$200,
            md: theme.radius.$100,
          },
          borderTopRightRadius: theme.radius.$100,
          borderBottomRightRadius: theme.radius.$100,
          borderBottomLeftRadius: {
            xs: theme.radius.$200 * 3,
            md: theme.radius.$100,
          },
        },
        last: {
          borderTopRightRadius: {
            xs: theme.radius.$200,
            md: theme.radius.$100,
          },
          borderTopLeftRadius: {
            xs: theme.radius.$100,
            md: theme.radius.$100,
          },
          borderBottomRightRadius: {
            xs: theme.radius.$200 * 3,
            md: theme.radius.$100,
          },
          borderBottomLeftRadius: {
            xs: theme.radius.$100,
            md: theme.radius.$100,
          },
        },
        middle: {
          borderRadius: theme.radius.$100,
        },
        default: {},
      },
    },
  },
  icon: {
    color: theme.colors.background,
    variants: {
      isFocused: {
        true: {
          color: theme.colors.background,
        },
        false: {
          color: theme.colors.backgroundDark,
        },
      },
    },
  },
}));
