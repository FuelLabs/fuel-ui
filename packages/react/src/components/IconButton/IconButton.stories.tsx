import { css } from '@fuel/theme'

import { IconButton, IconButtonProps } from './IconButton'

export default {
  component: IconButton,
  title: 'UI/IconButton',
}

export const Usage = (args: IconButtonProps) => (
  <div className={css('flex gap-2')()}>
    <IconButton {...args} aria-label="Button" icon="BiCalendar" />
  </div>
)
