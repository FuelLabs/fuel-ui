import type { ChangeEvent, FC, ReactNode } from "react";

interface Props {
  onChange: (event: ChangeEvent) => void;
  children: ReactNode;
}

export const Dropdown: FC<Props> = ({ children, onChange }) => (
  <select onChange={onChange}>{children}</select>
);
