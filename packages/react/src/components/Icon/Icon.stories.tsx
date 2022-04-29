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
          <Icon key={key} icon={key} size={24} />
          <span className={styles.iconLabel()}>{key}</span>
        </div>
      ))}
    </div>
  )
}

AllIcons.parameters = {
  layout: 'fullscreen',
}

const styles = {
  /**
   * List styles
   */
  list: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    flexWrap: 'wrap',
    maxW: '$full',
    color: '$gray12',
  }),
  /**
   * Icon Wrapper styles
   */
  iconWrapper: css({
    p: '$3',
    mt: '-1px',
    mr: '-1px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$2',
    border: '1px solid $gray6',

    '&:hover': {
      cursor: 'pointer',
    },
  }),
  /**
   * Icon Label Styles
   */
  iconLabel: css({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxW: '$full',
    fontSize: '$xs',
    color: '$gray10',
  }),
}
