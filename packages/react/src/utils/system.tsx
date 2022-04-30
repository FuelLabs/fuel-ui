import { css, cx } from '@fuel/css'
import {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactElement,
  RefAttributes,
  useMemo,
} from 'react'

import { PropsWithAsAndCSS } from './types'

type Render<P> = (props: PropsWithAsAndCSS<P>) => ReactElement

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
  type Props = PropsWithAsAndCSS<P>
  type Component = ForwardRefExoticComponent<
    PropsWithoutRef<Props> & RefAttributes<Props>
  >
  return forwardRef<T, Props>(({ className, css: styleObj, ...props }, ref) => {
    const styles = useMemo(() => styleObj && css(styleObj as any), [styleObj])
    const classes = cx(className, styles?.())
    return render({ ref, className: classes, ...props } as any)
  }) as Component
}
