import { FC } from 'react'
import { IconButton, IconButtonProps } from '../IconButton'

export type TagCloseButtonsProps = Omit<IconButtonProps, 'icon' | 'aria-label'>

export const TagCloseButton: FC<TagCloseButtonsProps> = (props) => {
  return <IconButton {...props} aria-label="close" icon="BiX" variant="link" />
}
