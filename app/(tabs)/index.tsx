import { ScreenHeader } from "@/components/ScreenHeader";
import { Button, Icons, Text } from "@/components/ui";
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

        <Box variants={{ direction: "column", gap: "$200" }}>
          <Box variants={{ gap: "$200" }}>
            <Button
              title="Open help modal"
              onPress={() => router.push("/help")}
            />
            <Button
              title="Navigate to example"
              onPress={() => router.push("/example")}
            />
          </Box>
        </Box>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create((th, rt) => ({
  container: {
    paddingTop: th.units.$100,
    paddingHorizontal: th.units.$200,
    gap: th.units.$100,
  },
}));
