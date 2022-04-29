import { PropsWithChildren, FC } from 'react'
import * as RDialog from '@radix-ui/react-dialog'

export type DialogCloseProps = PropsWithChildren<RDialog.DialogCloseProps>
export const DialogClose: FC<DialogCloseProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <RDialog.Close className={className} asChild {...props}>
      {children}
    </RDialog.Close>
  )
}
