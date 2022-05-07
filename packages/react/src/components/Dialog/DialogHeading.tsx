import { styled } from '@fuel/css'
import * as RDialog from '@radix-ui/react-dialog'

import * as styles from './styles'

export type DialogHeadingProps = RDialog.DialogTitleProps
export const DialogHeading = styled(RDialog.Title, styles.heading)
