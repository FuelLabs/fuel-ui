/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ForwardedRef, ReactElement } from "react";
import { forwardRef } from "react";

import type { BaseProps } from "./types";

export function createComponent<
  Props,
  ObjProps = unknown,
  ToOmit = unknown,
  HTMLElement = any,
  FinalProps = ToOmit extends string
    ? Omit<BaseProps<Props>, ToOmit>
    : BaseProps<Props>
>(
  render: (
    props: FinalProps & { ref: ForwardedRef<HTMLElement> }
  ) => ReactElement | null
) {
  const Component = forwardRef<HTMLElement, FinalProps>((props, ref) =>
    render({ ref, ...props })
  );
  return Component as typeof Component & ObjProps;
}
