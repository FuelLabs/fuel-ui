import type { ThemeUtilsCSS } from "@fuels-ui/css";
import { cx, styled } from "@fuels-ui/css";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Children, cloneElement, createElement } from "react";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";

import { RadioGroupItem } from "./RadioGroupItem";
import * as styles from "./styles";

export type RadioGroupProps = RadioGroupPrimitive.RadioGroupProps & {
  gap?: ThemeUtilsCSS["gap"];
  direction?: "row" | "column";
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

const Root = styled(RadioGroupPrimitive.Root);

export const RadioGroup = createComponent<RadioGroupProps>(
  ({
    gap = "$2",
    direction = "column",
    css,
    isDisabled,
    isReadOnly,
    children,
    className,
    ...props
  }) => {
    const disabled = isDisabled || isReadOnly;
    const classes = cx(
      "fuel_radio_group",
      className,
      styles.root({ disabled })
    );

    const customProps = {
      ...props,
      disabled,
      className: classes,
      css: {
        gap,
        flexDirection: direction,
        ...css,
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const customChildren = Children.toArray(children).map((child: any) => {
      if (child?.type?.id === "RadioGroupItem") {
        return cloneElement(child, {
          isDisabled,
          isReadOnly,
          required: props.required,
        });
      }
      return child;
    });

    return createElement(Root, customProps, customChildren);
  }
) as CreateComponent<RadioGroupProps> & {
  id: string;
  Item: typeof RadioGroupItem;
};

RadioGroup.id = "RadioGroup";
RadioGroup.Item = RadioGroupItem;
