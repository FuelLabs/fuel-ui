import { Wallet } from "fuels";
import { ChangeEvent, FC, ReactNode, SyntheticEvent } from "react";

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