import { createComponent, HTMLProps } from '@/utils'
import { css, cx, styled } from '@fuel-js/css'

export type ContainerSizes = 'sm' | 'md' | 'lg' | 'xl'
export type ContainerProps = HTMLProps['div'] & {
  size?: ContainerSizes
}

const Root = styled('div')

export const Container = createComponent<ContainerProps>(
  ({ className, size, ...props }) => {
    const classes = cx(className, styles({ size }))
    return <Root {...props} className={classes} />
  }
)

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
