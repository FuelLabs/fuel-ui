import { allColorKeys } from '@fuel/css'
import { css } from '@fuel/css'

import { Button, ButtonProps } from './Button'
import { Icon } from '../Icon'

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: 'select',
    },
    color: {
      defaultValue: 'accent',
      control: 'select',
    },
    variant: {
      defaultValue: 'solid',
      control: 'select',
    },
    leftIcon: {
      options: Icon._iconList,
      control: 'select',
    },
    rightIcon: {
      options: Icon._iconList,
      control: 'select',
    },
  },
}

export const Sizes = (args: ButtonProps) => {
  return (
    <div className={styles.wrapper()}>
      <Button {...args} size="xs">
        Button
      </Button>
      <Button {...args} size="sm">
        Button
      </Button>
      <Button {...args} size="md">
        Button
      </Button>
      <Button {...args} size="lg">
        Button
      </Button>
    </div>
  )
}

export const Variants = (args: ButtonProps) => (
  <div className={styles.wrapper()}>
    <Button {...args} variant="solid">
      Button
    </Button>
    <Button {...args} variant="outlined">
      Button
    </Button>
    <Button {...args} variant="ghost">
      Button
    </Button>
    <Button {...args} variant="link">
      Button
    </Button>
  </div>
)

export const Colors = (args: ButtonProps) => (
  <div className={styles.gridList()}>
    {allColorKeys.map((color) => (
      <Button key={color} {...args} color={color}>
        Button
      </Button>
    ))}
  </div>
)

export const WithIcon = (args: ButtonProps) => (
  <div className={styles.wrapper()}>
    <Button {...args} leftIcon="BiCalendar">
      Button
    </Button>
    <Button {...args} rightIcon="BiCalendar">
      Button
    </Button>
  </div>
)

export const Loading = (args: ButtonProps) => (
  <div className={styles.wrapper()}>
    <Button {...args} isLoading>
      Button
    </Button>
  </div>
)

export const Disabled = (args: ButtonProps) => (
  <div className={styles.wrapper()}>
    <Button {...args} isDisabled>
      Button
    </Button>
  </div>
)

/**
 * Styles
 */
const styles = {
  wrapper: css({
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  }),
  gridList: css({
    display: 'grid',
    gap: '$4',
    gridTemplateColumns: 'repeat(6, 1fr)',
  }),
}
