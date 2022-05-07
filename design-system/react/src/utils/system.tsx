/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "@stitches/react";
import type { ReactElement } from "react";
import { forwardRef, createElement as baseCreateElement } from "react";

import type { As, Children, PropsWithAs } from "./types";

import { useConstant } from "@/hooks";

type Render<P> = (props: PropsWithAs<P>) => ReactElement;

/**
 * Creates a type-safe component with the `as`, css prop and `React.forwardRef`
 * inherit from styled function of Stitches.
 *
 * @example
 * import { createComponent } from "@/utils/system";
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

export function createComponent<P>(render: Render<P>) {
  return forwardRef<any, PropsWithAs<P>>((props, ref) =>
    render({ ref, ...props } as any)
  );
}
