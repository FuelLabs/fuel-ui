/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactElement,
  RefAttributes,
} from "react";
import { forwardRef } from "react";

import type { PropsWithAs } from "./types";

type Render<P, OP = any> = (
  props: PropsWithoutRef<PropsWithAs<OP extends string ? Omit<P, OP> : P>> &
    RefAttributes<any>
) => ReactElement;

export type CreateComponent<P, OP = any> = ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithAs<OP extends string ? Omit<P, OP> : P>> &
    RefAttributes<any>
>;

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
  P,
  OP = unknown,
  Props = PropsWithAs<OP extends string ? Omit<P, OP> : P>
>(render: Render<P, OP>) {
  return forwardRef<any, Props>((props, ref) =>
    render({ ref, ...props } as any)
  );
}
