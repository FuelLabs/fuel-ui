import { allColorKeys } from '@fuel/theme'
import tw, { css } from 'twin.macro'

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
      defaultValue: 'primary',
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

export const Sizes = (args: ButtonProps) => (
  <div className={css(tw`flex space-x-2`)()}>
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
    <Button {...args} size="xl">
      Button
    </Button>
  </div>
)

export const Variants = (args: ButtonProps) => (
  <div className={css(tw`flex items-center gap-2`)()}>
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
  <div className={css(tw`grid gap-4 grid-cols-6`)()}>
    {allColorKeys.map((color) => (
      <Button key={color} {...args} color={color}>
        Button
      </Button>
    ))}
  </div>
)

export const WithIcon = (args: ButtonProps) => (
  <div className={css(tw`flex gap-4`)()}>
    <Button {...args} leftIcon="BiCalendar">
      Button
    </Button>
    <Button {...args} rightIcon="BiCalendar">
      Button
    </Button>
  </div>
)
