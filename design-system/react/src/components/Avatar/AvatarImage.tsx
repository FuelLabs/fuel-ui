import { cx, styled } from "@fuel/css";
import * as RAvatar from "@radix-ui/react-avatar";
import { createElement } from "react";

import * as styles from "./styles";

import { createComponent } from "@/utils";

export type AvatarImageProps = RAvatar.AvatarImageProps;

const Root = styled(RAvatar.Image);

export const AvatarImage = createComponent<AvatarImageProps>(
  ({ className, children, ...props }) => {
    const classes = cx(className, styles.image());
    return createElement(Root, { ...props, className: classes }, children);
  }
);
