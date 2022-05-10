import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";

import { createComponent } from "@/utils";

export type StackProps = FlexProps;

export const Stack = createComponent<StackProps>(
  ({ gap = "$2", direction = "column", ...props }) => (
    <Flex {...props} gap={gap} direction={direction} />
  )
);
