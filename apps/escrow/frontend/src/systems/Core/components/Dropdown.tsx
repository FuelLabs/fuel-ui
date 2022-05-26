import { ChangeEvent, FC, ReactNode } from "react";

interface Props {
    onChange: (event: ChangeEvent) => void;
    children: ReactNode;
}

export const Dropdown: FC<Props> = ({
    children,
    onChange,
  }) => {

    return (
        <select onChange={onChange}>
            {children}
        </select>
    );
};