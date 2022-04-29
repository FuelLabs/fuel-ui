import { css } from '@fuel/css'
import { Button } from '../Button'

import { Tooltip, TooltipProps } from './Tooltip'

export default {
  component: Tooltip,
  title: 'UI/Tooltip',
}

export const Usage = (args: TooltipProps) => (
  <div className={styles()}>
    <Tooltip {...args} content={<>Hello world</>}>
      <Button>Hover me</Button>
    </Tooltip>
  </div>
)

const styles = css({
  w: '100vw',
  h: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
