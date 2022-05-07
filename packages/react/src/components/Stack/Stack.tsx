import { styled } from '@fuel/css'

import type { HTMLProps } from '@/utils'
import { createComponent } from '@/utils'

export type StackProps = HTMLProps['div'] & {
  gap?: string
  direction?: 'row' | 'column'
}

const Root = styled('div')

export const Stack = createComponent<StackProps>(
  ({ gap = '$2', direction: flexDirection = 'column', ...props }) => (
    <Root {...props} css={{ display: 'flex', gap, flexDirection }} />
  )
)
