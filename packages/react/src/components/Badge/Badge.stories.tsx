import { Badge } from './Badge'
import { Text } from '../Text'
import { css } from '@fuel/css'

export default {
  component: Badge,
  title: 'UI/Badge',
  argTypes: {},
}

export const Usage = () => (
  <Text fontSize="xs" className={css({ margin: 0, gap: '$2' })()}>
    <Badge>Label</Badge>
    <Badge variant="solid">Label</Badge>
    <Badge variant="outlined">Label</Badge>
  </Text>
)
