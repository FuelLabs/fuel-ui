import { darkColors } from '@fuel-ui/css';

import { Card } from '../Card';
import { ContentLoader } from '../ContentLoader';
import type { ContentLoaderProps } from '../ContentLoader/defs';

export const InputAmountLoader = (props: ContentLoaderProps) => (
  <Card css={{ p: '$0' }}>
    <ContentLoader
      speed={2}
      height={80}
      backgroundColor={darkColors.intentsBase10}
      foregroundColor={darkColors.intentsBase5}
      {...props}
    >
      <ContentLoader.Rect x="12" y="21" width="100" height="24" rx="4" />
      <ContentLoader.Rect
        stickX="right"
        x="80"
        y="27"
        width="31"
        height="18"
        rx="4"
      />
      <ContentLoader.Rect
        stickX="left"
        stickY="bottom"
        x="12"
        y="11"
        width="72"
        height="16"
        rx="4"
      />
      <ContentLoader.Rect
        stickX="right"
        x="12"
        y="21"
        width="60"
        height="28"
        rx="4"
      />
    </ContentLoader>
  </Card>
);
