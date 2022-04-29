import { cx } from '@fuel/css'
import { FC, PropsWithChildren } from 'react'

import * as styles from './styles'

export type DialogFooterProps = PropsWithChildren<{
  align?: 'start' | 'end'
  className?: string
}>
export const DialogFooter: FC<DialogFooterProps> = ({
  align,
  className,
  children,
}) => <div className={cx(className, styles.footer({ align }))}>{children}</div>
