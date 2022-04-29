import { css } from '@fuel/css'
import { FC, PropsWithChildren } from 'react'

export type ContainerSizes = 'sm' | 'md' | 'lg' | 'xl'
export type ContainerProps = PropsWithChildren<{
  size?: ContainerSizes
}>

export const Container: FC<ContainerProps> = ({ children, size }) => {
  return <div className={styles({ size })}>{children}</div>
}

const styles = css({
  margin: '0 auto',

  variants: {
    size: {
      sm: {
        px: '$10',
        w: '$xl',
      },
      md: {
        px: '$14',
        w: '$2xl',
      },
      lg: {
        px: '$14',
        w: '$4xl',
      },
      xl: {
        px: '$14',
        w: '$6xl',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
