import { darkColors } from '@fuel-ui/css';

import { Card } from '../Card';
import { ContentLoader } from '../ContentLoader';
import type { ContentLoaderProps } from '../ContentLoader';

export const InputAmountLoader = (props: ContentLoaderProps) => (
  <Card>
    <ContentLoader
      speed={2}
      height={66}
      backgroundColor={darkColors.gray10}
      foregroundColor={darkColors.gray5}
      {...props}
    >
      <ContentLoader.Rect x="12" y="21" width="100" height="24" rx="4" />
      <ContentLoader.Rect
        stickX="right"
        x="12"
        y="8"
        width="41"
        height="18"
        rx="4"
      />
      <ContentLoader.Rect
        stickX="right"
        stickY="bottom"
        x="12"
        y="12"
        width="72"
        height="16"
        rx="4"
      />
    </ContentLoader>
  </Card>
);
