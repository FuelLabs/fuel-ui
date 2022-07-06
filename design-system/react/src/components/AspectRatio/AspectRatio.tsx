import { cx, styled } from "@fuel-ui/css";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { createElement } from "react";

import { createComponent } from "../../utils";

export type AspectRatioProps = AspectRatioPrimitive.AspectRatioProps;

const Root = styled(AspectRatioPrimitive.Root);

export const AspectRatio = createComponent<AspectRatioProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_aspect-ratio", className);
    return createElement(Root, { ...props, className: classes }, children);
  }
);
