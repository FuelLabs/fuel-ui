import { Button, ButtonProps } from './Button'
import tw, { css } from 'twin.macro'
import { allColorKeys } from '@fuel/theme'

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    variant: { control: 'select' },
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
  <div className={css(tw`flex items-center space-x-2`)()}>
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
