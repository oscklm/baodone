import { ScreenHeader } from "@/components/ScreenHeader";
import { Button, Text } from "@/components/ui";
import { router } from "expo-router";
import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Box } from "@/components/ui/Box";

export default function HomeTabScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ScreenHeader>
          <Text preset="h1">Home</Text>
        </ScreenHeader>
        <Box variants={{ padding: "$100", gap: "$200" }}>
          <Button title="Example 1" onPress={() => router.push("/help")} />
          <Button title="Example 2" onPress={() => router.push("/help")} />
        </Box>
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
