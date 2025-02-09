import { ContentWrapper } from "@/components/ContentWrapper";
import { ScreenHeader } from "@/components/ScreenHeader";
import { ScrollView } from "@/components/ScrollView";
import { Text } from "@/components/ui/Text";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function HelpScreen() {
  return (
    <React.Fragment>
      <ContentWrapper color="primary">
        <ScrollView>
          <ScreenHeader>
            <Text preset="h1">Help</Text>
          </ScreenHeader>
          <View>
            <Text preset="h3">Section #1</Text>
            <Text preset="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quisquam deserunt ullam eos praesentium iure, enim mollitia
              tempora nisi beatae dolorem illo inventore asperiores officia
              eligendi adipisci corporis et ad!
            </Text>
          </View>
          <View>
            <Text preset="h3">Section #2</Text>
            <Text preset="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quisquam deserunt ullam eos praesentium iure, enim mollitia
              tempora nisi beatae dolorem illo inventore asperiores officia
              eligendi adipisci corporis et ad!
            </Text>
          </View>
          <View>
            <Text preset="h3">Section #3</Text>
            <Text preset="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quisquam deserunt ullam eos praesentium iure, enim mollitia
              tempora nisi beatae dolorem illo inventore asperiores officia
              eligendi adipisci corporis et ad!
            </Text>
          </View>
          {/* Use a light status bar on iOS to account for the black space above the modal */}
        </ScrollView>
      </ContentWrapper>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create((th, rt) => ({
  container: {},
}));
