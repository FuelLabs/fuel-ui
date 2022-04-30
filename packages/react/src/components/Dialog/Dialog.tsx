import { FC } from 'react'
import * as RDialog from '@radix-ui/react-dialog'

import { RefComponent } from '@/utils'
import { DialogContent, DialogContentProps } from './DialogContent'
import { DialogDescription, DialogDescriptionProps } from './DialogDescription'
import { DialogHeading, DialogHeadingProps } from './DialogHeading'
import { DialogTrigger, DialogTriggerProps } from './DialogTrigger'
import { DialogClose, DialogCloseProps } from './DialogClose'
import { DialogFooter, DialogFooterProps } from './DialogFooter'

/**
 * Root Dialog Component
 */
type DialogComponent = FC<RDialog.DialogProps> & {
  Content: FC<DialogContentProps>
  Trigger: FC<DialogTriggerProps>
  Close: FC<DialogCloseProps>
  Heading: FC<DialogHeadingProps>
  Description: FC<DialogDescriptionProps>
  Footer: RefComponent<DialogFooterProps>
}

export const Dialog: DialogComponent = ({ children, ...props }) => {
  return <RDialog.Root {...props}>{children}</RDialog.Root>
}

Dialog.Content = DialogContent
Dialog.Trigger = DialogTrigger
Dialog.Close = DialogClose
Dialog.Heading = DialogHeading
Dialog.Description = DialogDescription
Dialog.Footer = DialogFooter
