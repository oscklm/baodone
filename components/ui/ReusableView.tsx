import { View, ViewProps } from "react-native";
import { ViewStyle } from "react-native";
import {
  SpaceTokens,
  StyleSheet,
  UnistylesVariants,
} from "react-native-unistyles";

import {
  UnistylesTheme,
  UnistylesValues,
} from "react-native-unistyles/lib/typescript/src/types";

type Variants = UnistylesVariants<typeof styles>;

interface ReusableViewProps extends Omit<ViewProps, "style"> {
  style: Omit<ViewStyle, keyof Variants> & {
    margin: SpaceTokens;
    padding: SpaceTokens;
  };
}

export const ReusableView = ({ style, ...props }: ReusableViewProps) => {
  const { margin, padding, ...rest } = style;

  styles.useVariants({
    margin,
    padding,
  });

  return <View {...props} style={{ ...rest }} />;
};

const computeVariantFromToken = <T extends keyof UnistylesValues>(
  theme: UnistylesTheme,
  property: T
) => {
  type VariantRecord = {
    [P in T]: Record<
      SpaceTokens,
      { [K in P]: UnistylesTheme["space"][SpaceTokens] }
    >;
  };

  const variants = Object.keys(theme.space).reduce((acc, token) => {
    return {
      ...acc,
      [token as SpaceTokens]: {
        [property]: theme.space[token as SpaceTokens],
      },
    };
  }, {});

  return { [property]: variants } as VariantRecord;
};

const styles = StyleSheet.create((theme, runtime) => ({
  root: {
    variants: {
      ...computeVariantFromToken(theme, "margin"),
      ...computeVariantFromToken(theme, "padding"),
    },
  },
}));
