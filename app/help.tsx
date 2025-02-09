import { ScreenHeader } from "@/components/ScreenHeader";
import { Text } from "@/components/ui/Text";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <ScreenHeader>
        <Text preset="h1">Help</Text>
      </ScreenHeader>

      <View>
        <Text preset="h3">Section #1</Text>
        <Text preset="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          quisquam deserunt ullam eos praesentium iure, enim mollitia tempora
          nisi beatae dolorem illo inventore asperiores officia eligendi
          adipisci corporis et ad!
        </Text>
      </View>
      <View>
        <Text preset="h3">Section #2</Text>
        <Text preset="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          quisquam deserunt ullam eos praesentium iure, enim mollitia tempora
          nisi beatae dolorem illo inventore asperiores officia eligendi
          adipisci corporis et ad!
        </Text>
      </View>
      <View>
        <Text preset="h3">Section #3</Text>
        <Text preset="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          quisquam deserunt ullam eos praesentium iure, enim mollitia tempora
          nisi beatae dolorem illo inventore asperiores officia eligendi
          adipisci corporis et ad!
        </Text>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create((th, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top,
    paddingHorizontal: th.units.$400,
    gap: th.units.$200,
  },
}));
