import { ScreenHeader } from "@/components/ScreenHeader";
import { Stack, Button, Text } from "@/components/ui";
import { router } from "expo-router";
import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Box } from "@/components/ui/Box";
import { Image } from "expo-image";
export default function SearchTabScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ScreenHeader>
          <Text variant="h1">Search</Text>
        </ScreenHeader>
        <Box us={{ gap: "$300" }}>
          <Box
            us={{
              padding: "$200",
              borderRadius: "$200",
              backgroundColor: "primary",
            }}
          >
            <Image
              source={require("@/assets/images/characters/bun_idle-background-removed.png")}
              style={{ width: 200, height: 200 }}
            />
            <Text variant="h2" color="white">
              Find something to do
            </Text>
            <Text variant="body" color="white">
              Search for a task by name or description. You can also search for
              tasks by tags.
            </Text>
          </Box>
          <Stack us={{ gap: "$300" }}>
            <Button title="Example 1" onPress={() => router.push("/help")} />
            <Button title="Example 2" onPress={() => router.push("/help")} />
          </Stack>
        </Box>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create((theme, runtime) => ({
  container: {
    padding: theme.space.$200,
    gap: theme.space.$100,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingVertical: theme.space.$200,
    marginHorizontal: theme.space.$400,
  },
}));
