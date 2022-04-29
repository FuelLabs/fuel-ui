import { Button } from '../Button'
import { BoxCentered } from '../BoxCentered'

import { Tooltip, TooltipProps } from './Tooltip'

export default {
  component: Tooltip,
  title: 'Overlay/Tooltip',
  parameters: {
    layout: 'fullscreen',
  },
}

export const Usage = (args: TooltipProps) => (
  <BoxCentered minHS minWS>
    <Tooltip {...args} content={<>Hello world</>}>
      <Button>Hover me</Button>
    </Tooltip>
  </BoxCentered>
)
