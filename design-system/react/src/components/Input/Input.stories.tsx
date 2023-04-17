import { useState } from 'react';

import { Stack } from '../Box/Stack';
import { Button } from '../Button';
import { Icon } from '../Icon';

import type { InputProps } from './Input';
import { Input } from './Input';

export default {
  component: Input,
  title: 'Form/Input',
  argTypes: {},
};

const FIELD_ARGS = {
  name: 'email',
  type: 'email',
  placeholder: 'Your email',
};

export const Sizes = (args: InputProps) => (
  <Stack css={{ maxW: '350px' }} gap="$3">
    <Input {...FIELD_ARGS} {...args} size="sm">
      <Input.Field {...FIELD_ARGS} type="email" />
    </Input>
    <Input {...FIELD_ARGS} {...args} size="md">
      <Input.Field {...FIELD_ARGS} type="email" />
    </Input>
    <Input {...FIELD_ARGS} {...args} size="lg">
      <Input.Field {...FIELD_ARGS} type="email" />
    </Input>
  </Stack>
);

export const TypeNumber = (_args: InputProps) => {
  return (
    <Stack css={{ maxW: '350px' }} gap="$3">
      <Input>
        <Input.Number name="amount" placeholder="0.0" inputMode="decimal" />
      </Input>
    </Stack>
  );
};

export const Disabled = (args: InputProps) => (
  <Stack css={{ maxW: '350px' }} gap="$3">
    <Input {...args} isDisabled>
      <Input.Field {...FIELD_ARGS} />
    </Input>
  </Stack>
);

export const ReadOnly = (args: InputProps) => (
  <Stack css={{ maxW: '350px' }} gap="$3">
    <Input {...args} isReadOnly>
      <Input.Field {...FIELD_ARGS} />
    </Input>
  </Stack>
);

export const Addon = (args: InputProps) => (
  <Stack css={{ maxW: '350px' }} gap="$3">
    <Input {...args}>
      <Input.AddonLeft>http://</Input.AddonLeft>
      <Input.Field type="text" name="website" placeholder="yourwebsite.xyz" />
    </Input>
    <Input {...args}>
      <Input.Field type="text" name="website" placeholder="yourdomain" />
      <Input.AddonRight>.eth</Input.AddonRight>
    </Input>
  </Stack>
);

export const WithIcon = (args: InputProps) => (
  <Stack css={{ maxW: '350px' }} gap="$3">
    <Input {...args}>
      <Input.ElementLeft element={<Icon icon="Envelope" />} />
      <Input.Field {...FIELD_ARGS} />
    </Input>
    <Input {...args}>
      <Input.Field {...FIELD_ARGS} />
      <Input.ElementRight element={<Icon icon="Envelope" />} />
    </Input>
  </Stack>
);

export const WithButton = (args: InputProps) => {
  const [showing, setShowing] = useState(false);

  function toggle() {
    setShowing((s) => !s);
  }

  return (
    <Stack css={{ maxW: '350px' }} gap="$3">
      <Input {...args}>
        <Input.ElementLeft element={<Icon icon="Lock" />} />
        <Input.Field
          type={showing ? 'text' : 'password'}
          name="password"
          placeholder="Your password..."
        />
        <Input.ElementRight>
          <Button
            variant="outlined"
            onPress={toggle}
            css={{ mr: '-6px', px: '$2' }}
          >
            Show
          </Button>
        </Input.ElementRight>
      </Input>
    </Stack>
  );
};

export const Invalid = (args: InputProps) => (
  <Stack css={{ maxW: '350px' }} gap="$3">
    <Input {...args} isInvalid>
      <Input.ElementLeft element={<Icon icon="Envelope" />} />
      <Input.Field {...FIELD_ARGS} />
    </Input>
    <Input {...args} isInvalid>
      <Input.Field {...FIELD_ARGS} />
    </Input>
  </Stack>
);
