import { styled } from '@fuel-js/css'
import { createComponent, HTMLProps } from '@/utils'

export type StackProps = HTMLProps['div'] & {
  gap?: string
  direction?: 'row' | 'column'
}

const Root = styled('div')

export const Stack = createComponent<StackProps>(
  ({ gap = '$2', direction: flexDirection = 'column', ...props }) => {
    return <Root {...props} css={{ display: 'flex', gap, flexDirection }} />
  }
)
