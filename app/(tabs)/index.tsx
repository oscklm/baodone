import { ScreenHeader } from "@/components/ScreenHeader";
import Stack from "@/components/ui/Stack";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { router } from "expo-router";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ScreenHeader>
        <Text variant="heading" size="large">
          Baodone
        </Text>
      </ScreenHeader>
      <Stack paddingY="$100">
        <Text variant="heading" size="small">
          Your personal assistant
        </Text>
        <Text variant="body" size="medium">
          Keep track of your daily tasks and reminders.
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Let's go!" onPress={() => router.push("/help")} />
        </View>
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create((theme, runtime) => ({
  container: {
    flex: 1,
    padding: theme.space.$200,
    gap: theme.space.$100,
  },
  buttonContainer: {
    paddingVertical: theme.space.$200,
    marginHorizontal: theme.space.$400,
  },
}));
