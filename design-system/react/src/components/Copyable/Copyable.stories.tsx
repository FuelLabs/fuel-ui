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
export const IconProps = () => (
  <Copyable
    value="Another text which you copied"
    iconProps={{ icon: Icon.is('Airplane'), 'aria-label': 'An Airplane' }}
  >
    Different Icon
  </Copyable>
);

IconProps.parameters = {
  layout: 'centered',
};
Usage.parameters = {
  layout: 'centered',
};

export const WithoutChildren = () => <Copyable value="Some value" />;

WithoutChildren.parameters = {
  layout: 'centered',
};
