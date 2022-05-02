import { cx } from '@fuel-js/css'
import { PropsWithChildren, FC } from 'react'
import * as RAlertDialog from '@radix-ui/react-alert-dialog'

import * as styles from '../Dialog/styles'

export type AlertDialogDescriptionProps =
  PropsWithChildren<RAlertDialog.AlertDialogTitleProps>

export const AlertDialogDescription: FC<AlertDialogDescriptionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <RAlertDialog.Description
      className={cx(className, styles.description())}
      {...props}
    >
      {children}
    </RAlertDialog.Description>
  )
}
