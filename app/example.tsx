import { ContentWrapper } from "@/components/ContentWrapper";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Box, Text } from "@/components/ui";
import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function ExampleScreen() {
  return (
    <ContentWrapper>
      <ScrollView>
        <ScreenHeader>
          <Text preset="h4">Some example screen</Text>
        </ScreenHeader>
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
          <Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, perferendis suscipit nostrum officiis ipsa sed, ullam
              amet explicabo hic repellat dolore esse neque, vel expedita! Rerum
              consectetur libero dolor at?
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </ContentWrapper>
  );
}

const styles = StyleSheet.create((th) => ({
  container: {
    paddingTop: th.units.$100,
    paddingHorizontal: th.units.$200,
    gap: th.units.$100,
  },
  scrollContentContainer: {
    paddingTop: th.units.$100,
    paddingHorizontal: th.units.$200,
    gap: th.units.$100,
  },
}));
