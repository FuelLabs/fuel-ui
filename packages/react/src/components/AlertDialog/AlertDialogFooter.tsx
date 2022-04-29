import { cx } from '@fuel/css'
import { FC, PropsWithChildren } from 'react'

import * as styles from '../Dialog/styles'

export type AlertDialogFooterProps = PropsWithChildren<{
  align?: 'start' | 'end'
  className?: string
}>
export const AlertDialogFooter: FC<AlertDialogFooterProps> = ({
  align,
  className,
  children,
}) => <div className={cx(className, styles.footer({ align }))}>{children}</div>
