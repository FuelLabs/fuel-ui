/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactElement } from "react";
import { forwardRef } from "react";

import type { PropsWithAs } from "./types";

type Render<P, OP extends string> = (
  props: Omit<PropsWithAs<P>, OP>
) => ReactElement;

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

export function createComponent<P, OP extends string = "">(
  render: Render<P, OP>
) {
  type Props = Omit<PropsWithAs<P>, OP>;
  return forwardRef<any, Props>((props, ref) =>
    render({ ref, ...props } as any)
  );
}
