import { forwardRef, ReactElement } from 'react'
import { PropsWithAs, RefComponent } from './types'

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
): RefComponent<P> {
  type Props = PropsWithAs<P>
  return forwardRef<T, Props>((props, ref) =>
    render({ ref, ...props } as any)
  ) as RefComponent<P>
}
