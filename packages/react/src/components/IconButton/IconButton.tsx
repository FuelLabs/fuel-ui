import { FC, ReactElement } from 'react'

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

export const IconButton: FC<IconButtonProps> = ({ icon, ...props }) => {
  return <Button {...props} leftIcon={icon} justIcon />
}
