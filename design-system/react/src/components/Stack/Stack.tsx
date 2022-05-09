import { Box } from "../Box";

import type { HTMLProps } from "@/utils";
import { createComponent } from "@/utils";

export type StackProps = HTMLProps["div"] & {
  gap?: string;
  direction?: "row" | "column";
};

export const Stack = createComponent<StackProps>(
  ({ gap = "$2", direction: flexDirection = "column", css, ...props }) => (
    <Box {...props} css={{ display: "flex", gap, flexDirection, ...css }} />
  )
);
