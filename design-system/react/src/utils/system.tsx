/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ForwardedRef, ReactElement } from "react";
import { forwardRef } from "react";

import type { BaseProps } from "./types";

export function createComponent<
  Props,
  ObjProps = unknown,
  ToOmit = unknown,
  HTMLElement = any,
  FinalProps = ToOmit extends string ? Omit<Props, ToOmit> : Props
>(
  render: (
    props: BaseProps<FinalProps & { ref: ForwardedRef<HTMLElement> }>
  ) => ReactElement
) {
  const Component = forwardRef<HTMLElement, BaseProps<FinalProps>>(
    (props, ref) => render({ ref, ...props })
  );
  return Component as typeof Component & ObjProps;
}
