import { ScreenHeader } from "@/components/ScreenHeader";
import { Text } from "@/components/ui";
import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
export default function SearchTabScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ScreenHeader>
          <Text preset="h1">Search</Text>
        </ScreenHeader>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create((theme, runtime) => ({
  container: {
    padding: theme.units.$200,
    gap: theme.units.$100,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingVertical: theme.units.$200,
    marginHorizontal: theme.units.$400,
  },
}));
