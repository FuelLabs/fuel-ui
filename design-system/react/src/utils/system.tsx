/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactElement } from "react";
import { forwardRef } from "react";

import type { As, BaseProps, Options, Props } from "./types";

export type Component<O extends Options> = {
  <T extends As>(
    props: Omit<O, "as"> &
      Omit<BaseProps<Options<T>>, keyof O> &
      Required<Options<T>>
  ): JSX.Element | null;
  (props: Props<O>): JSX.Element | null;
  displayName?: string;
};

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

// export function createComponent<O extends Options>(
//   render: (props: PropFinalProps<O>) => ReactElement
// ) {
//   const Role = (props: Props<O>, ref: React.Ref<any>) =>
//     render({ ref, ...props });
//   return forwardRef(Role) as unknown as Component<O>;
// }

export function createComponent<
  O,
  CustomObjProps = unknown,
  PropsToOmit = unknown,
  HTMLElement = any,
  FinalProps = Props<PropsToOmit extends string ? Omit<O, PropsToOmit> : O>
>(render: (props: Props<FinalProps>) => ReactElement) {
  const Role = (props: Props<FinalProps>, ref: React.Ref<HTMLElement>) => {
    return render({ ref, ...props });
  };

  return forwardRef<HTMLElement, Props<FinalProps>>(
    Role
  ) as unknown as Component<FinalProps> & CustomObjProps;
}
