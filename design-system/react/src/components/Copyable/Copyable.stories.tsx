import { Icon } from '../Icon';

import { Copyable } from './Copyable';

export default {
  component: Copyable,
  title: 'Helpers/Copyable',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Usage = () => (
  <Copyable value="You copied this text">Standard Icon</Copyable>
);
export const UsageIconProps = () => (
  <Copyable
    value="Another text which you copied"
    iconProps={{ icon: Icon.is('Airplane'), 'aria-label': 'An Airplane' }}
  >
    Different Icon
  </Copyable>
);

Usage.parameters = {
  layout: 'centered',
};
