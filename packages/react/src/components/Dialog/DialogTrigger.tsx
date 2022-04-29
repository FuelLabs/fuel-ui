import { PropsWithChildren, FC } from 'react'
import * as RDialog from '@radix-ui/react-dialog'

export type DialogTriggerProps = PropsWithChildren<RDialog.DialogTriggerProps>
export const DialogTrigger: FC<DialogTriggerProps> = ({
  children,
  ...props
}) => {
  return (
    <RDialog.Trigger asChild {...props}>
      {children}
    </RDialog.Trigger>
  )
}
