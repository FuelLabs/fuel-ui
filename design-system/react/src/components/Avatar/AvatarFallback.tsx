import { cx, styled } from "@fuel/css";
import * as RAvatar from "@radix-ui/react-avatar";
import { createElement } from "react";

import * as styles from "./styles";

import { createComponent } from "@/utils";

export type AvatarFallbackProps = RAvatar.AvatarFallbackProps;
const Root = styled(RAvatar.Fallback);

export const AvatarFallback = createComponent<AvatarFallbackProps>(
  ({ className, children, ...props }) => {
    const classes = cx(className, styles.fallback());
    return createElement(Root, { ...props, className: classes }, children);
  }
);
