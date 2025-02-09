import type React from "react";
import { View } from "react-native";
import { StyleSheet, UnistylesVariants } from "react-native-unistyles";
import { Box } from "@/components/ui";

type Variants = UnistylesVariants<typeof styles>;

interface ScreenHeaderProps extends Variants {
  children: React.ReactNode;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  children,
  enableTopMargin,
}) => {
  styles.useVariants({
    enableTopMargin,
  });
  return (
    <View style={styles.base}>
      {children}
      <Box variants={{ direction: "row", gap: "$025" }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <View
            key={index}
            style={[styles.separator, { opacity: (11 - index - 1) * 0.1 }]}
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
    variants: {
      enableTopMargin: {
        true: {
          marginTop: theme.units.$100,
        },
        default: {},
      },
    },
  },
  separator: {
    flex: 1,
    height: theme.units.$050,
    maxWidth: theme.units.$200,
    borderRadius: theme.radius.$150,
    backgroundColor: theme.colors.primary.base,
  },
}));
