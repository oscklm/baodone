import type React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface ScreenContainerProps {
  children: React.ReactNode;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create((th, rt) => ({
  container: {
    flex: 1,
    width: "100%",
    marginHorizontal: "auto",
    backgroundColor: th.colors.background.base,
    maxWidth: {
      xs: "100%",
      xl: 1400,
    },
  },
}));
