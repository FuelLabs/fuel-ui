import { createComponent } from '@/utils'
import { IconButton, IconButtonProps } from '../IconButton'

export type TagCloseButtonsProp = Omit<IconButtonProps, 'icon' | 'aria-label'>

export const TagCloseButton = createComponent<TagCloseButtonsProp>((props) => {
  return <IconButton {...props} aria-label="close" icon="BiX" variant="link" />
})
