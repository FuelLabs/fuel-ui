import { createComponent } from '@/utils'
import { ReactElement } from 'react'

import { Button, ButtonProps } from '../Button'
import { Icons } from '../Icon'

type CustomButtonProps = Omit<
  ButtonProps,
  'leftIcon' | 'rightIcon' | 'justIcon'
>

export type IconButtonProps = CustomButtonProps & {
  'aria-label': string
  icon: Icons | ReactElement
}

export const IconButton = createComponent<IconButtonProps>(
  ({ icon, ...props }) => <Button {...props} leftIcon={icon} justIcon />
)
