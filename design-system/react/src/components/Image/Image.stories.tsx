import type { ImageProps } from './Image'
import { Image } from './Image'

export default {
  component: Image,
  title: 'UI/Image',
  argTypes: {},
}

export const Usage = (args: ImageProps) => (
  <Image {...args} />
)
