import type * as React from "react";

import { Box } from "./Box";

type BoxProps = React.ComponentProps<typeof Box>;

export type StackProps = BoxProps & {
	readonly horizontal?: boolean;
	readonly divider?: React.ReactElement;
};

export const Stack = (props: StackProps) => {
	const { children, horizontal, divider, ...rest } = props;

	const isHorizontal = horizontal ?? false;

	const direction = isHorizontal ? "row" : "column";

	return (
		<Box {...rest} direction={direction}>
			{children}
		</Box>
	);
};

Stack.displayName = "Stack";
