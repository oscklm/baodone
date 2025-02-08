import React, { useEffect } from "react";
import { View } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { TabButton } from "@/components/TabButton";

export default function TabLayout() {
  return (
    <Tabs>
      <View style={styles.container}>
        <View style={styles.tabSlot}>
          <TabSlot />
        </View>
        <View style={styles.tabList}>
          <TabTrigger name="home" asChild>
            <TabButton icon="House" position="first">
              Home
            </TabButton>
          </TabTrigger>
          <TabTrigger name="search" asChild>
            <TabButton icon="Search" position="last">
              Explore
            </TabButton>
          </TabTrigger>
        </View>
      </View>
      {/** TabList nessecary here so screens get registered to the navigator */}
      <TabList style={{ display: "none" }}>
        <TabTrigger name="home" href="/" />
        <TabTrigger name="search" href="/search" />
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create((theme, runtime) => ({
  container: {
    flex: 1,
    paddingTop: runtime.insets.top,
    flexDirection: {
      xs: "column",
      md: "row-reverse",
    },
  },
  tabList: {
    marginBottom: theme.units.$100,
    gap: theme.units.$200,
    flexDirection: {
      xs: "row",
      md: "column",
    },
    padding: theme.units.$200,
    width: {
      xs: "100%",
      md: 100,
    },
  },
  tabSlot: {
    flex: 1,
    backgroundColor: theme.colors.background.base,
  },
}));
