import * as buttonVariants from '../Button/variants';

export const size = {
  xs: {
    gap: '$1',
    px: '$2',
    fontSize: '$xs',
    height: '$5',
    borderRadius: '$full',
  },
  sm: {
    gap: '$2',
    px: '$3',
    fontSize: '$sm',
    height: '$6',
    borderRadius: '$full',
  },
  md: {
    gap: '$2',
    px: '$3',
    fontSize: '$base',
    height: '$8',
    borderRadius: '$full',
  },
};

export const colors = {
  solid: buttonVariants.getSolidVariants(false),
  outlined: buttonVariants.getOutlinedVariants(false),
  ghost: buttonVariants.getGhostVariants(false),
};
