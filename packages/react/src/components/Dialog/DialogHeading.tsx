import { cx } from '@fuel/css'
import { PropsWithChildren, FC } from 'react'
import * as RDialog from '@radix-ui/react-dialog'

import * as styles from './styles'

export type DialogHeadingProps = PropsWithChildren<RDialog.DialogTitleProps>
export const DialogHeading: FC<DialogHeadingProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <RDialog.Title className={cx(className, styles.heading())} {...props}>
      {children}
    </RDialog.Title>
  )
}
