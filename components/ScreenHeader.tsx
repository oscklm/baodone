import type React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type ScreenHeaderProps = {
  children: React.ReactNode;
};

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({ children }) => {
  return (
    <View style={styles.base}>
      {children}
      <View style={styles.seperator} />
    </View>
  );
};

const styles = StyleSheet.create((theme, runtime) => ({
  base: {
    marginBottom: theme.units.$200,
  },
  seperator: {
    height: 4,
    width: 250,
    backgroundColor: theme.colors.primary.base,
  },
}));
