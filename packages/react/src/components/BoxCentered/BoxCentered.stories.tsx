import { BoxCentered, BoxCenteredProps } from './BoxCentered'

export default {
  component: BoxCentered,
  title: 'Layout/BoxCentered',
  layout: 'fullscreen',
}

export const Usage = (args: BoxCenteredProps) => (
  <BoxCentered {...args}>Text Centered</BoxCentered>
)

Usage.args = {
  minHS: true,
  minWS: true,
}
