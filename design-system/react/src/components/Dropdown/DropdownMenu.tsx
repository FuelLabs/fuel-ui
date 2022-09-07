import type { MenuProps } from "../Menu";
import { Menu } from "../Menu";

import { useDropdown } from "./Dropdown";

import { createComponent } from "~/utils";

export type DropdownMenuProps = MenuProps;
type ObjProps = {
  id: string;
};

export const DropdownMenu = createComponent<DropdownMenuProps, ObjProps>(
  (props) => {
    const { menuMinWidth, menuProps } = useDropdown();

    return (
      <Menu
        {...props}
        {...(menuProps as MenuProps)}
        css={{
          py: "$2",
          px: "$2",
          boxSizing: "border-box",
          minWidth: menuMinWidth as never,
          ...props.css,
        }}
      />
    );
  }
);

DropdownMenu.id = "DropdownMenu";
