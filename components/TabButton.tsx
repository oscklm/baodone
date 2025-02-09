import type { TabTriggerSlotProps } from "expo-router/ui";
import { Pressable, type View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Icons } from "./ui/Icons";
import React from "react";
type Icon = keyof typeof Icons;

type TabButtonProps = TabTriggerSlotProps & {
  icon: Icon;
  position?: "first" | "last" | "middle";
};

export const TabButton = React.forwardRef<View, TabButtonProps>(
  ({ children, isFocused, icon, style, position, ...props }, ref) => {
    const Icon = Icons[icon];

    styles.useVariants({
      isFocused,
      position,
    });

    return (
      <Pressable ref={ref} {...props} style={styles.container}>
        <Icon color={styles.icon.color} style={{ width: 21, height: 21 }} />
      </Pressable>
    );
  }
);

TabButton.displayName = "TabButton";

const styles = StyleSheet.create((th, rt) => ({
  container: {
    flex: {
      xs: 1,
      sm: 0,
    },
    minHeight: {
      xs: 0,
      sm: 50,
    },
    alignItems: "center",
    justifyContent: "center",
    gap: th.units.$100,
    paddingVertical: th.units.$200,
    flexDirection: {
      xs: "column",
      sm: "row",
    },
    variants: {
      isFocused: {
        true: {
          backgroundColor: th.colors.primary.base,
        },
        false: {
          backgroundColor: th.colors.button.dark,
        },
      },
      position: {
        first: {
          borderTopLeftRadius: {
            xs: th.radius.$150,
            sm: th.radius.$150,
          },
          borderTopRightRadius: th.radius.$150,
          borderBottomRightRadius: th.radius.$150,
          borderBottomLeftRadius: {
            xs: th.radius.$150 * 3,
            sm: th.radius.$150,
          },
        },
        last: {
          borderTopRightRadius: {
            xs: th.radius.$150,
            sm: th.radius.$150,
          },
          borderTopLeftRadius: th.radius.$150,
          borderBottomLeftRadius: th.radius.$150,
          borderBottomRightRadius: {
            xs: th.radius.$150 * 3,
            sm: th.radius.$150,
          },
        },
        middle: {
          borderRadius: th.radius.$200,
        },
        default: {},
      },
    },
  },
  icon: {
    variants: {
      isFocused: {
        true: {
          color: th.colors.foreground.light,
        },
        false: {
          color: th.colors.foreground.dark,
        },
      },
    },
  },
}));
