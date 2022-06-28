import { cx, styled } from "@test-changeset/css";
import * as RDialog from "@radix-ui/react-dialog";
import { createElement } from "react";

import { createComponent } from "../../utils";

import * as styles from "./styles";

export type DialogDescriptionProps = RDialog.DialogTitleProps;
const Root = styled(RDialog.Description, styles.description);

export const DialogDescription = createComponent<DialogDescriptionProps>(
  ({ className, children, ...props }) => {
    const classes = cx(
      "fuel_dialog--description",
      className,
      styles.description()
    );
    return createElement(Root, { ...props, className: classes }, children);
  }
);
