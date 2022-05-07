import { styled } from '@fuel-js/css'
import * as RDialog from '@radix-ui/react-dialog'

import * as styles from '../Dialog/styles'

export type DialogHeadingProps = RDialog.DialogTitleProps
export const DialogHeading = styled(RDialog.Title, styles.heading)
