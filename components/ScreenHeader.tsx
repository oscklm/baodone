import type React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Box } from "@/components/ui";

type ScreenHeaderProps = {
  children: React.ReactNode;
};

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({ children }) => {
  return (
    <View style={styles.base}>
      {children}
      <Box variants={{ direction: "row", gap: "$025" }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <View
            key={index}
            style={[styles.separator, { opacity: (10 - index - 1) * 0.1 }]}
          />
        ))}
      </Box>
    </View>
  );
};

const styles = StyleSheet.create((theme, runtime) => ({
  base: {
    marginBottom: theme.units.$200,
    gap: theme.units.$050,
  },
  separator: {
    height: 8,
    flex: 1,
    maxWidth: 20,
    borderRadius: theme.radius.$150,
    backgroundColor: theme.colors.primary.base,
  },
}));
