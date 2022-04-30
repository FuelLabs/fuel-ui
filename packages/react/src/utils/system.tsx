import {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactElement,
  RefAttributes,
} from 'react'

import { PropsWithAs } from './types'

type Render<P> = (props: PropsWithAs<P>) => ReactElement

/**
 * Creates a type-safe component with the `as` prop and `React.forwardRef`.
 *
 * @example
 * import { createComponent } from "@/utils/system";
 *
 * type Props = {
 *   as?: "div";
 *   customProp?: boolean;
 * };
 *
 * const Component = createComponent<Props>(({ customProp, ...props }) => {
 *   return <div {...props} />;
 * });
 *
 * <Component as="button" customProp />
 */
export function createComponent<P, T extends HTMLElement = any>(
  render: Render<P>
) {
  type Props = PropsWithAs<P>
  type Component = ForwardRefExoticComponent<
    PropsWithoutRef<Props> & RefAttributes<Props>
  >
  return forwardRef<T, Props>((props, ref) => {
    return render({ ref, ...props } as any)
  }) as Component
}
