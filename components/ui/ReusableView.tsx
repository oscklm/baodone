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

type VariantRecord<T extends keyof UnistylesValues> = {
  [Key in T]: Record<
    SpaceTokens,
    { [K in Key]: UnistylesTheme["space"][SpaceTokens] }
  >;
};

type SpaceTokens = "$0" | "$025" | "$050" | "$075" | "$100";

const space = {
  $0: 0, // 0px
  $025: 2, // 2px  (0.25x)
  $050: 4, // 4px  (0.5x)
  $075: 6, // 6px  (0.75x)
  $100: 8, // 8px  (1x) - base spacing unit
} satisfies Record<SpaceTokens, number>;

const computeVariantFromToken = <T extends keyof UnistylesValues>(
  theme: UnistylesTheme,
  property: T
): VariantRecord<T> => {
  const spaceEntries = Object.entries(space) as [SpaceTokens, number][];

  const variants = spaceEntries.reduce((acc, [token, value]) => ({
    ...acc,
    [token]: { [property]: value },
  }));

  // Use intermediate type assertion to handle computed property key
  return { [property]: variants } as unknown as VariantRecord<T>;
};

const styles = StyleSheet.create((theme, runtime) => ({
  root: {
    variants: {
      ...computeVariantFromToken(theme, "margin"),
      ...computeVariantFromToken(theme, "padding"),
    },
  },
}));
