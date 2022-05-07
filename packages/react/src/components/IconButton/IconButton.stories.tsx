import { css } from '@fuel/css'

import type { IconButtonProps } from './IconButton'
import { IconButton } from './IconButton'

export default {
  component: IconButton,
  title: 'UI/IconButton',
}

export const Usage = (args: IconButtonProps) => (
  <div className={styles()}>
    <IconButton {...args} aria-label="Button" icon="BiCalendar" />
  </div>
)

const styles = css({
  display: 'flex',
  gap: '$2',
})
