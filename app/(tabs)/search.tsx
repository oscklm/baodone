import { Text } from "@/components/ui/Text";
import { StyleSheet, View } from "react-native";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text variant="body">Tab Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
