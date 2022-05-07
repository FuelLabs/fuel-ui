import { styled } from '@fuel/css'
import { forwardRef, ReactElement } from 'react'
import { PropsWithAs } from './types'

type Render<P> = (props: PropsWithAs<P>) => ReactElement

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
  return styled(
    forwardRef<any, P>((props, ref) => render({ ref, ...props } as any))
  )
}
