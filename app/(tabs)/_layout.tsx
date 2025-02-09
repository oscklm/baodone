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

const styles = StyleSheet.create((th, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top,
    flexDirection: {
      xs: "column",
      sm: "row-reverse",
    },
  },
  tabList: {
    marginBottom: th.units.$100,
    gap: th.units.$200,
    flexDirection: {
      xs: "row",
      sm: "column",
    },
    margin: {
      xs: 0,
      sm: th.units.$200,
    },
    padding: {
      xs: th.units.$200,
      sm: 0,
    },
    marginRight: {
      xs: 0,
      sm: 0,
    },
    width: {
      xs: "100%",
      sm: 100,
      md: 200,
    },
  },
  tabSlot: {
    flex: 1,
    backgroundColor: th.colors.background.base,
  },
}));
