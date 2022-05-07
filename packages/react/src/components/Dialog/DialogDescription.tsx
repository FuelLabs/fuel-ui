import { styled } from '@fuel/css'
import * as RDialog from '@radix-ui/react-dialog'

import * as styles from './styles'

export type DialogDescriptionProps = RDialog.DialogTitleProps
export const DialogDescription = styled(RDialog.Description, styles.description)
