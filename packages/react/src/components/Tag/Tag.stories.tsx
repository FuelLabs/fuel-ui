import { colorKeys, css } from '@fuel-js/css'

import { Tag, TagProps } from './Tag'
import { Icon } from '../Icon'
import { TagCloseButton } from './TagCloseButton'

export default {
  component: Tag,
  title: 'UI/Tag',
  argTypes: {
    size: {
      defaultValue: 'sm',
      control: 'select',
    },
    color: {
      options: colorKeys,
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

export const Sizes = (args: TagProps) => {
  return (
    <div className={styles.wrapper()}>
      <Tag {...args} size="xs">
        Label
      </Tag>
      <Tag {...args} size="sm">
        Label
      </Tag>
      <Tag {...args} size="md">
        Label
      </Tag>
    </div>
  )
}

export const Variants = (args: TagProps) => (
  <div className={styles.wrapper()}>
    <Tag {...args} variant="solid">
      Label
    </Tag>
    <Tag {...args} variant="outlined">
      Label
    </Tag>
    <Tag {...args} variant="ghost">
      Label
    </Tag>
  </div>
)

export const Colors = (args: TagProps) => (
  <div className={styles.gridList()}>
    {colorKeys.map((color) => (
      <Tag key={color} {...args} color={color}>
        Label
      </Tag>
    ))}
  </div>
)

export const WithIcon = (args: TagProps) => (
  <div className={styles.wrapper()}>
    <Tag {...args} leftIcon="BiCalendar" iconAriaLabel="calendar">
      Label
    </Tag>
    <Tag {...args} rightIcon="BiCalendar" iconAriaLabel="calendar">
      Label
    </Tag>
  </div>
)

export const WithClose = (args: TagProps) => (
  <div className={styles.wrapper()}>
    <Tag {...args} leftIcon="BiCalendar" iconAriaLabel="calendar">
      Label
      <TagCloseButton />
    </Tag>
  </div>
)

export const Loading = (args: TagProps) => (
  <div className={styles.wrapper()}>
    <Tag {...args} isLoading>
      Label
    </Tag>
  </div>
)

export const Disabled = (args: TagProps) => (
  <div className={styles.wrapper()}>
    <Tag {...args} isDisabled>
      Label
    </Tag>
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
