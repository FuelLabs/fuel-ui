import { Children, createElement, FC, ReactNode } from 'react'
import { cx } from '@fuel-js/css'

import { HTMLProps, createComponent, RefComponent } from '@/utils'
import { createIcon } from '../Text'
import { Spinner } from '../Spinner'
import * as styles from './styles'

import { ButtonBaseProps, SPINNER_SIZE } from '../Button'
import { TagCloseButton, TagCloseButtonsProps } from './TagCloseButton'

function getChildren(
  isLoading: boolean | undefined,
  size: ButtonBaseProps['size'],
  iconLeft: ButtonBaseProps['leftIcon'],
  iconRight: ButtonBaseProps['rightIcon'],
  children: ReactNode
) {
  if (isLoading) {
    return (
      <>
        <Spinner color="current" size={SPINNER_SIZE[size || 'md']} />
        {children}
      </>
    )
  }
  const hasCloseBtn = Children.toArray(children).some((child: any) =>
    child.type?.name?.includes('TagCloseButton')
  )
  if (hasCloseBtn) {
    return children
  }
  return (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  )
}

export type TagVariants = 'solid' | 'outlined' | 'ghost'
export type TagSizes = 'xs' | 'sm' | 'md'

export type TagProps = HTMLProps['div'] &
  ButtonBaseProps & {
    size?: TagSizes
    variant?: TagVariants
  }

type TagComponent = RefComponent<TagProps> & {
  CloseButton: FC<TagCloseButtonsProps>
}

export const Tag = createComponent<TagProps, HTMLDivElement>(
  ({
    as = 'div',
    size = 'sm',
    color = 'accent',
    variant = 'solid',
    leftIcon,
    rightIcon,
    iconSize,
    iconAriaLabel,
    isLoading,
    isDisabled,
    children,
    className,
    ...props
  }) => {
    const disabled = isLoading || isDisabled
    const iconLeft = createIcon(leftIcon, iconSize, iconAriaLabel)
    const iconRight = createIcon(rightIcon, iconSize, iconAriaLabel)

    const classes = cx(
      className,
      styles.tag({
        size,
        variant,
        disabled,
        color: color as any,
      })
    )

    const customChildren = getChildren(
      isLoading,
      size,
      iconLeft,
      iconRight,
      children
    )

    return createElement(as, { ...props, className: classes }, customChildren)
  }
) as TagComponent

Tag.CloseButton = TagCloseButton
