import { cloneElement, createElement, ReactElement } from 'react'
import { css, allColors, Colors, cx, utils } from '@fuel/css'

import { createComponent, HTMLProps } from '@/utils'
import { Icon, Icons } from '../Icon'

export function createIcon(
  icon?: Icons | ReactElement,
  iconSize?: number,
  iconAriaLabel?: string
) {
  return typeof icon === 'string' ? (
    <Icon icon={icon} size={iconSize} aria-label={iconAriaLabel} />
  ) : (
    icon && cloneElement(icon, { size: iconSize, 'aria-label': iconAriaLabel })
  )
}

export type TextProps = HTMLProps['p'] & {
  fontSize?: utils.TextSizes
  color?: Colors
  leftIcon?: Icons | ReactElement
  rightIcon?: Icons | ReactElement
  iconSize?: number
  iconAriaLabel?: string
}

export const Text = createComponent<TextProps, HTMLParagraphElement>(
  ({
    as = 'p',
    fontSize,
    color,
    children,
    className,
    leftIcon,
    rightIcon,
    iconSize,
    iconAriaLabel,
    ...props
  }) => {
    const classes = cx(className, styles({ fontSize, color }))
    const iconLeft = createIcon(leftIcon, iconSize, iconAriaLabel)
    const iconRight = createIcon(rightIcon, iconSize, iconAriaLabel)

    return createElement(
      as,
      { ...props, className: classes },
      <>
        {iconLeft}
        {children}
        {iconRight}
      </>
    )
  }
)

const styles = css({
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  variants: {
    // TODO: adjust typings
    fontSize: (utils.textSize.__keys as any[]).reduce(
      (obj, key) => ({
        ...obj,
        [key]: {
          textSize: key,
        },
      }),
      {}
    ),
    // TODO: adjust typings
    color: (allColors as any[]).reduce(
      (obj, key) => ({
        ...obj,
        [key]: {
          color: `$${key}`,
        },
      }),
      {}
    ),
  },

  defaultVariants: {
    fontSize: 'md',
    color: 'textColor',
  },
})
