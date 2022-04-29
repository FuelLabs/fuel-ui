import { css } from '@fuel/css'
import { Stack, StackProps } from './Stack'

export default {
  component: Stack,
  title: 'Layout/Stack',
  argTypes: {},
}

export const Usage = (args: StackProps) => (
  <>
    <Stack {...args} className={css({ maxW: '$sm' })()}>
      <div className={css({ background: '$gray7' })()}>&nbsp;</div>
      <div className={css({ background: '$gray7' })()}>&nbsp;</div>
      <div className={css({ background: '$gray7' })()}>&nbsp;</div>
      <div className={css({ background: '$gray7' })()}>&nbsp;</div>
    </Stack>
  </>
)
