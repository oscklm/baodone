import { View, ViewProps } from "react-native";
import { StyleSheet, UnistylesVariants } from "react-native-unistyles";

type Variants = UnistylesVariants<typeof styles>;

interface BoxProps extends ViewProps {
  variants?: Variants;
}

export const Box = ({ variants, ...props }: BoxProps) => {
  styles.useVariants({
    ...variants,
  });

  return <View {...props} style={[styles.root, props.style]} />;
};

const styles = StyleSheet.create((theme) => ({
  root: {
    variants: {
      direction: {
        row: {
          flexDirection: "row",
        },
        column: {
          flexDirection: "column",
        },
        rowReverse: {
          flexDirection: "row-reverse",
        },
        columnReverse: {
          flexDirection: "column-reverse",
        },
      },
      margin: theme.createVariantFromProperty("margin"),
      padding: theme.createVariantFromProperty("padding"),
      paddingX: theme.createVariantFromProperty("paddingHorizontal"),
      paddingY: theme.createVariantFromProperty("paddingVertical"),
      paddingTop: theme.createVariantFromProperty("paddingTop"),
      paddingBottom: theme.createVariantFromProperty("paddingBottom"),
      paddingLeft: theme.createVariantFromProperty("paddingLeft"),
      paddingRight: theme.createVariantFromProperty("paddingRight"),
      borderWidth: theme.createVariantFromProperty("borderWidth"),
      gap: theme.createVariantFromProperty("gap"),
    },
  },
}));
