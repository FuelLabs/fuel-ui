import { cx } from '@fuel/css'
import { PropsWithChildren, FC } from 'react'
import * as RDialog from '@radix-ui/react-dialog'

import * as styles from './styles'

export type DialogDescriptionProps = PropsWithChildren<RDialog.DialogTitleProps>
export const DialogDescription: FC<DialogDescriptionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <RDialog.Description
      className={cx(className, styles.description())}
      {...props}
    >
      {children}
    </RDialog.Description>
  )
}
