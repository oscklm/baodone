import { ScreenHeader } from "@/components/ScreenHeader";
import { Button, Text } from "@/components/ui";
import { router } from "expo-router";
import { StyleSheet } from "react-native-unistyles";
import { Box } from "@/components/ui/Box";
import { ScrollView } from "@/components/ScrollView";

export default function HomeTabScreen() {
  return (
    <ScrollView>
      <ScreenHeader>
        <Text preset="h1">Home</Text>
      </ScreenHeader>
      <Box variants={{ direction: "column", gap: "$200" }}>
        <Box variants={{ direction: "row", gap: "$200" }}>
          <Button
            title="Open help modal"
            onPress={() => router.push("/help")}
          />
          <Button
            title="Navigate to example"
            onPress={() => router.push("/example")}
          />
        </Box>
        <Box variants={{ gap: "$200" }}>
          <Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, perferendis suscipit nostrum officiis ipsa sed, ullam
              amet explicabo hic repellat dolore esse neque, vel expedita! Rerum
              consectetur libero dolor at?
            </Text>
          </Box>
          <Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, perferendis suscipit nostrum officiis ipsa sed, ullam
              amet explicabo hic repellat dolore esse neque, vel expedita! Rerum
              consectetur libero dolor at?
            </Text>
          </Box>
          <Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, perferendis suscipit nostrum officiis ipsa sed, ullam
              amet explicabo hic repellat dolore esse neque, vel expedita! Rerum
              consectetur libero dolor at?
            </Text>
          </Box>
          <Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, perferendis suscipit nostrum officiis ipsa sed, ullam
              amet explicabo hic repellat dolore esse neque, vel expedita! Rerum
              consectetur libero dolor at?
            </Text>
          </Box>
          <Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, perferendis suscipit nostrum officiis ipsa sed, ullam
              amet explicabo hic repellat dolore esse neque, vel expedita! Rerum
              consectetur libero dolor at?
            </Text>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create((th) => ({
  scrollContent: {
    flexGrow: 1,
  },
}));
