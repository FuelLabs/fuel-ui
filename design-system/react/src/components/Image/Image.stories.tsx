import type { ImageProps } from './Image';
import { Image } from './Image';

export default {
  component: Image,
  title: 'UI/Image',
  argTypes: {},
};

export const Usage = (args: ImageProps) => (
  <Image
    {...args}
    src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
    alt="Landscape photo by Tobias Tullius"
    height={400}
  />
);
