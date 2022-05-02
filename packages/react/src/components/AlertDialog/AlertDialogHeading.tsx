import { cx } from '@fuel-js/css'
import { PropsWithChildren, FC } from 'react'
import * as RAlertDialog from '@radix-ui/react-alert-dialog'

import * as styles from '../Dialog/styles'

export type AlertDialogHeadingProps =
  PropsWithChildren<RAlertDialog.AlertDialogTitleProps>

export const AlertDialogHeading: FC<AlertDialogHeadingProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <RAlertDialog.Title className={cx(className, styles.heading())} {...props}>
      {children}
    </RAlertDialog.Title>
  )
}
