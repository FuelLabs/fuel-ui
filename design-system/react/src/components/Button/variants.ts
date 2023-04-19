import type { LayerIntent, LayerVariant } from '@fuel-ui/css';
import { toCamelCase, layerIntents, layerVariants } from '@fuel-ui/css';

function createVariantStyle(variant: LayerVariant, intent: LayerIntent) {
  const layer = toCamelCase(`semantic-${variant}-${intent}`);
  return {
    layer,

    ...(variant === 'link' && {
      py: '$1',
      px: '$1',
      height: 'auto',
      minW: 'auto',
    }),
  };
}

export const size = {
  xs: {
    gap: '5px',
    px: '$2',
    fontSize: '$xs',
    fontWeight: '$bold',
    height: '$7',
  },
  sm: {
    gap: '$2',
    px: '$3',
    fontSize: '$sm',
    fontWeight: '$medium',
    height: '$8',
  },
  md: {
    gap: '$2',
    px: '$4',
    fontSize: '$md',
    fontWeight: '$medium',
    height: '$10',
  },
  lg: {
    gap: '$3',
    px: '$5',
    fontSize: '$lg',
    fontWeight: '$medium',
    height: '$12',
  },
};

export const intents = layerVariants.reduce((obj, variant) => {
  return {
    ...obj,
    [variant]: layerIntents.map((intent) => ({
      intent,
      variant,
      css: createVariantStyle(variant as LayerVariant, intent as LayerIntent),
    })),
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}, {} as Record<LayerVariant, any>);
