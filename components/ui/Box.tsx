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

const styles = StyleSheet.create((th) => ({
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
      alignItems: {
        center: {
          alignItems: "center",
        },
        start: {
          alignItems: "flex-start",
        },
        end: {
          alignItems: "flex-end",
        },
      },
      margin: th.createVariantFromProperty("margin"),
      padding: th.createVariantFromProperty("padding"),
      paddingX: th.createVariantFromProperty("paddingHorizontal"),
      paddingY: th.createVariantFromProperty("paddingVertical"),
      paddingTop: th.createVariantFromProperty("paddingTop"),
      paddingBottom: th.createVariantFromProperty("paddingBottom"),
      paddingLeft: th.createVariantFromProperty("paddingLeft"),
      paddingRight: th.createVariantFromProperty("paddingRight"),
      borderWidth: th.createVariantFromProperty("borderWidth"),
      gap: th.createVariantFromProperty("gap"),
    },
  },
}));
