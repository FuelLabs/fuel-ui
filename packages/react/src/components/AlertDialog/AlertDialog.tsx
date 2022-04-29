import { FC } from 'react'
import * as RAlertDialog from '@radix-ui/react-alert-dialog'

import {
  AlertDialogContent,
  AlertDialogContentProps,
} from './AlertDialogContent'

import {
  AlertDialogDescription,
  AlertDialogDescriptionProps,
} from './AlertDialogDescription'

import {
  AlertDialogHeading,
  AlertDialogHeadingProps,
} from './AlertDialogHeading'

import {
  AlertDialogTrigger,
  AlertDialogTriggerProps,
} from './AlertDialogTrigger'

import { AlertDialogFooter, AlertDialogFooterProps } from './AlertDialogFooter'
import { AlertDialogCancel, AlertDialogCancelProps } from './AlertDialogCancel'
import { AlertDialogAction, AlertDialogActionProps } from './AlertDialogAction'

/**
 * Root AlertDialog Component
 */
type AlertDialogComponent = FC<RAlertDialog.AlertDialogProps> & {
  Content: FC<AlertDialogContentProps>
  Trigger: FC<AlertDialogTriggerProps>
  Heading: FC<AlertDialogHeadingProps>
  Description: FC<AlertDialogDescriptionProps>
  Footer: FC<AlertDialogFooterProps>
  Cancel: FC<AlertDialogCancelProps>
  Action: FC<AlertDialogActionProps>
}

export const AlertDialog: AlertDialogComponent = ({ children, ...props }) => {
  return <RAlertDialog.Root {...props}>{children}</RAlertDialog.Root>
}

AlertDialog.Content = AlertDialogContent
AlertDialog.Trigger = AlertDialogTrigger
AlertDialog.Heading = AlertDialogHeading
AlertDialog.Description = AlertDialogDescription
AlertDialog.Footer = AlertDialogFooter
AlertDialog.Cancel = AlertDialogCancel
AlertDialog.Action = AlertDialogAction
