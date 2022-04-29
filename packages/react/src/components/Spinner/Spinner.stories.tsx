import { css } from '@fuel/css'

import { Spinner } from './Spinner'

export default {
  component: Spinner,
  title: 'UI/Spinner',
}

export const Usage = () => (
  <div className={style()}>
    <Spinner />
    <Spinner size={30} color="indigo" />
    <Spinner size={50} color="gray" />
  </div>
)

const style = css({
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})
