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

const styles = StyleSheet.create((th) => ({
  container: {
    paddingTop: th.units.$100,
    paddingHorizontal: th.units.$200,
    gap: th.units.$100,
  },
}));
