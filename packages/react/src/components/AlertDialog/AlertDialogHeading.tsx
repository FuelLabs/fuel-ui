import { styled } from '@fuel-js/css'
import * as RAlertDialog from '@radix-ui/react-alert-dialog'

import * as styles from '../Dialog/styles'

export type AlertDialogHeadingProps = RAlertDialog.AlertDialogTitleProps
export const AlertDialogHeading = styled(RAlertDialog.Title, styles.heading)
