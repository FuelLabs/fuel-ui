import type { BoxCenteredProps } from './BoxCentered';
import { BoxCentered } from './BoxCentered';

export default {
  component: BoxCentered,
  title: 'Base/Layout/BoxCentered',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Usage = (args: BoxCenteredProps) => (
  <BoxCentered {...args}>Text Centered</BoxCentered>
);

Usage.args = {
  minHS: true,
  minWS: true,
};
