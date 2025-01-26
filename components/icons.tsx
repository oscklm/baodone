import { FontAwesome } from "@expo/vector-icons";
import type { ComponentProps } from "react";

// Define the IconProps type using ComponentProps from FontAwesome
type IconProps = Omit<ComponentProps<typeof FontAwesome>, "name">;

export const Icons = {
	Home: (props: IconProps) => <FontAwesome name="home" {...props} />,
	Search: (props: IconProps) => <FontAwesome name="search" {...props} />,
	Settings: (props: IconProps) => <FontAwesome name="cog" {...props} />,
	Profile: (props: IconProps) => <FontAwesome name="user" {...props} />,
};
