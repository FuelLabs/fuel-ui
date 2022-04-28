import { css } from '@fuel/theme'
import tw from 'twin.macro'

import { Spinner } from './Spinner'

export default {
  component: Spinner,
  title: 'UI/Spinner',
}

export const Usage = () => (
  <div className={css(tw`flex items-center gap-4`)()}>
    <Spinner />
    <Spinner size={30} color="indigo" />
    <Spinner size={50} color="slate" />
  </div>
)
