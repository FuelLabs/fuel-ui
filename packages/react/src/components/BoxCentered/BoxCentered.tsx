import { css } from '@fuel/css'
import { FC, PropsWithChildren } from 'react'

export type BoxCenteredProps = PropsWithChildren<{
  /**
   * max-width: '100vh
   */
  minWS?: boolean
  /**
   * max-height: '100vh
   */
  minHS?: boolean
}>

export const BoxCentered: FC<BoxCenteredProps> = ({
  children,
  minWS,
  minHS,
}) => {
  return <div className={styles({ minWS, minHS })}>{children}</div>
}

const styles = css({
  is: ['centered'],

  variants: {
    minWS: {
      true: {
        minW: '$screenW',
      },
    },
    minHS: {
      true: {
        minH: '$screenH',
      },
    },
  },
})
