import { styled } from '@fuel-js/css'
import * as RDialog from '@radix-ui/react-dialog'

import * as styles from '../Dialog/styles'

export type DialogDescriptionProps = RDialog.DialogTitleProps
export const DialogDescription = styled(RDialog.Description, styles.description)
