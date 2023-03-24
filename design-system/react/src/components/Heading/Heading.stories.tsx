import { Stack } from '../Stack';

import { Heading } from './Heading';
import type { HeadingProps } from './types';

export default {
  component: Heading,
  title: 'Base/Typography/Heading',
  argTypes: {},
};

export const Usage = (args: HeadingProps) => (
  <Stack gap="$4">
    <Heading {...args} css={{ m: '0' }} as="h1">
      Some title
    </Heading>
    <Heading {...args} css={{ m: '0' }} as="h2">
      Some title
    </Heading>
    <Heading {...args} css={{ m: '0' }} as="h3">
      Some title
    </Heading>
    <Heading {...args} css={{ m: '0' }} as="h4">
      Some title
    </Heading>
    <Heading {...args} css={{ m: '0' }} as="h5">
      Some title
    </Heading>
    <Heading {...args} css={{ m: '0' }} as="h6">
      Some title
    </Heading>
  </Stack>
);

const iconProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  leftIcon: 'Calendar' as any,
  leftIconAriaLabel: 'Calendar',
};

export const WithIcon = (args: HeadingProps) => (
  <Stack gap="$4">
    <Heading {...args} css={{ m: '0' }} as="h1" {...iconProps}>
      Some title
    </Heading>
    <Heading {...args} css={{ m: '0' }} as="h2" {...iconProps}>
      Some title
    </Heading>
    <Heading {...args} css={{ m: '0' }} as="h3" {...iconProps}>
      Some title
    </Heading>
    <Heading {...args} css={{ m: '0' }} as="h4" {...iconProps}>
      Some title
    </Heading>
    <Heading {...args} css={{ m: '0' }} as="h5" {...iconProps}>
      Some title
    </Heading>
    <Heading {...args} css={{ m: '0' }} as="h6" {...iconProps}>
      Some title
    </Heading>
  </Stack>
);
