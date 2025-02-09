import type React from "react";
import {
  Pressable,
  type PressableStateCallbackType,
  type PressableProps,
  View,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Text } from "./Text";

interface ButtonViewProps {
  title: string;
  pressableState: PressableStateCallbackType;
}

const ButtonView: React.FC<ButtonViewProps> = ({ title, pressableState }) => {
  styles.useVariants({
    pressed: pressableState.pressed,
    hovered: pressableState.hovered,
  });

  return (
    <View style={styles.buttonView}>
      <Text numberOfLines={1} preset="button" color="foreground">
        {title}
      </Text>
    </View>
  );
};

interface ButtonProps extends PressableProps {
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <Pressable {...props} style={styles.container}>
      {(state) => <ButtonView title={title} pressableState={state} />}
    </Pressable>
  );
};

const styles = StyleSheet.create((th) => ({
  container: {
    flexGrow: 1,
  },
  buttonView: {
    borderRadius: th.radius.$150,
    paddingVertical: th.units.$100,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: th.colors.button.base,
    variants: {
      pressed: {
        true: {
          opacity: 0.8,
        },
      },
      hovered: {
        true: {
          backgroundColor: th.colors.button.light,
        },
      },
    },
  },
}));
