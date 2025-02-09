import { ContentWrapper } from "@/components/ContentWrapper";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Text } from "@/components/ui";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";
export default function SearchTabScreen() {
  return (
    <ScrollView>
      <ScreenHeader>
        <Text preset="h1">Search</Text>
      </ScreenHeader>
    </ScrollView>
  );
}

const styles = StyleSheet.create((th) => ({
  container: {},
}));
