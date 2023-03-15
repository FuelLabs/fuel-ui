import { css } from '@fuel-ui/css';

export const root = css({
  all: 'unset',
  position: 'relative',
  width: 42,
  height: 25,
  backgroundColor: '$inputBg',
  borderRadius: '$full',
  boxShadow: '$sm',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  '&:focus-visible': {
    outline: '2px solid $gray5',
  },

  variants: {
    size: {
      sm: {
        width: 35,
        height: 18,
      },
      md: {
        width: 42,
        height: 25,
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const thumb = css({
  display: 'block',
  backgroundColor: '$gray7',
  borderRadius: '$full',
  boxShadow: `$md`,
  transition: 'all 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX(19px)',
    backgroundColor: '$accent11',
  },

  variants: {
    size: {
      sm: {
        width: 13,
        height: 13,
      },
      md: {
        width: 20,
        height: 20,
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
