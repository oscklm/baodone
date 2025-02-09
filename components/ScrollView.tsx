import React from "react";
import {
  ScrollView as RNScrollView,
  ScrollViewProps,
  View,
} from "react-native";
import { StyleSheet, UnistylesVariants } from "react-native-unistyles";

type Variants = UnistylesVariants<typeof styles>;

interface CustomScrollViewProps extends ScrollViewProps, Variants {
  children: React.ReactNode;
  style?: any;
}

export const ScrollView: React.FC<CustomScrollViewProps> = ({
  children,
  paddingTop,
  style,
  ...props
}) => {
  styles.useVariants({
    paddingTop,
  });

  return (
    <View style={styles.container}>
      <RNScrollView
        style={style}
        contentContainerStyle={styles.contentContainer}
        {...props}
      >
        {children}
      </RNScrollView>
    </View>
  );
};

const styles = StyleSheet.create((th) => ({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingLeft: th.units.$200,
    paddingRight: th.units.$200,
    variants: {
      paddingTop: {
        true: {
          paddingTop: th.units.$200,
        },
        false: {},
      },
    },
  },
}));
