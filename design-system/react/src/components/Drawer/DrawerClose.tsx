import { cx } from "@fuel-ui/css";

import type { IconButtonProps } from "..";
import { Icon, IconButton } from "..";

import { useDrawer } from ".";
import * as styles from "./styles";

import { createComponent } from "~/utils";

type OmitProps = "children";
type ElementType = "button";
type DrawerCloseProps = Omit<IconButtonProps, "aria-label" | "icon"> & {
  icon?: IconButtonProps["icon"];
  ["aria-label"]?: IconButtonProps["aria-label"];
};

export const DrawerClose = createComponent<
  DrawerCloseProps,
  unknown,
  OmitProps,
  ElementType
>(({ className, ...props }) => {
  const classes = cx("fuel_drawer-close", className, styles.close());
  const { state } = useDrawer();

  function handleClose() {
    state?.setOpen(false);
  }

  return (
    <IconButton
      {...props}
      icon={props.icon || Icon.is("X")}
      aria-label={props["aria-label"] || "Close"}
      variant={props.variant || "link"}
      color={props.color || "gray"}
      className={classes}
      onPress={handleClose}
    />
  );
});
