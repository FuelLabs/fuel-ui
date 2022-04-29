import { PropsWithChildren, forwardRef } from 'react'
import * as RDialog from '@radix-ui/react-dialog'

import * as styles from './styles'
import { Icon } from '../Icon'
import { css } from '@fuel/css'

export type DialogContentProps = PropsWithChildren<RDialog.DialogContentProps>

export const DialogContent = forwardRef<any, DialogContentProps>(
  ({ children, ...props }, ref) => {
    return (
      <RDialog.Portal>
        <RDialog.Overlay className={styles.overlay()} />
        <RDialog.Content className={styles.content()} {...props} ref={ref}>
          {children}
          <RDialog.Close className={closeButton()}>
            <Icon icon="BiX" size={20} color="gray10" />
          </RDialog.Close>
        </RDialog.Content>
      </RDialog.Portal>
    )
  }
)

const closeButton = css({
  is: ['centered', 'noAppearance'],
  position: 'absolute',
  border: '2px solid transparent',
  top: '$2',
  right: '$2',
  px: '$0',

  '&:focus': {
    borderRadius: '$md',
    borderColor: '$gray8',
  },
})
