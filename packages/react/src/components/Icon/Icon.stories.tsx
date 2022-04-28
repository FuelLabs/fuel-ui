import { Icon, IconProps } from './Icon'
import { useCopyToClipboard } from 'react-use'
import { css } from '@fuel/css'

export default {
  component: Icon,
  title: 'UI/Icon',
  argTypes: {
    color: { control: 'select' },
    size: {
      defaultValue: 40,
      control: { type: 'number' },
    },
  },
}

export const Usage = (args: IconProps) => (
  <div>
    <Icon {...args} icon="BiAlarm" />
  </div>
)

export const AllIcons = () => {
  const [, copy] = useCopyToClipboard()
  return (
    <div className={styles.list()}>
      {Icon._iconList.map((key) => (
        <div
          key={key}
          className={styles.iconWrapper()}
          onClick={() => copy(key)}
          title="Click to copy"
        >
          <Icon key={key} icon={key} size={20} />
          <span className={styles.iconLabel()}>{key}</span>
        </div>
      ))}
    </div>
  )
}

const styles = {
  /**
   * List styles
   */
  list: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    flexWrap: 'wrap',
    maxW: '$full',
    color: '$slate500',
  }),
  /**
   * Icon Wrapper styles
   */
  iconWrapper: css({
    p: '$3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$2',
    border: '1px solid $slate100',

    '&:hover': {
      cursor: 'pointer',
    },
  }),
  /**
   * Icon Label Styles
   */
  iconLabel: css({
    maxW: '$full',
    fontSize: '$xs',
    fontFamily: '$sans',
    fontWeight: '$semibold',
    color: '$slate400',
  }),
}
