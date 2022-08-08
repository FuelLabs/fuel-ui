/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactElement, RefAttributes } from "react";
import { forwardRef } from "react";

import type { PropsWithAs } from "./types";

type Render<P, HT = any> = (props: P & RefAttributes<HT>) => ReactElement;

/**
 * Creates a type-safe component with the `as`, css prop and `React.forwardRef`
 * inherit from styled function of Stitches.
 *
 * @example
 * import { createComponent } from "../../utils/system";
 *
 * type Props = {
 *   customProp?: boolean;
 * };
 *
 * const Component = createComponent<Props>(({ customProp, ...props }) => {
 *   return <div {...props} />;
 * });
 *
 * <Component as="button" customProp />
 */

export function createComponent<
  Props,
  CustomObjProps = unknown,
  PropsToOmit = unknown,
  HTMLElement = any,
  FinalProps = PropsWithAs<
    PropsToOmit extends string ? Omit<Props, PropsToOmit> : Props
  >
>(render: Render<FinalProps, HTMLElement>) {
  const Component = forwardRef<HTMLElement, FinalProps>((props, ref) =>
    render({ ref, ...props })
  );
  return Component as typeof Component & CustomObjProps;
}
