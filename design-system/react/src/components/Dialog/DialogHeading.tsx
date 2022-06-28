import { cx, styled } from "@test-changeset/css";
import * as RDialog from "@radix-ui/react-dialog";
import { createElement } from "react";

import { createComponent } from "../../utils";

import * as styles from "./styles";

export type DialogHeadingProps = RDialog.DialogTitleProps;

const Root = styled(RDialog.Title, styles.heading);

export const DialogHeading = createComponent<DialogHeadingProps>(
  ({ className, children, ...props }) => {
    const classes = cx("fuel_dialog--heading", className);
    return createElement(Root, { ...props, className: classes }, children);
  }
);
