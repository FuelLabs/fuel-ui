import { darkColors } from '@fuel-ui/css';

import { Card } from '../Card';

import { ContentLoader } from './ContentLoader';

export default {
  component: ContentLoader,
  title: 'UI/ContentLoader',
};

export const Usage = () => {
  return (
    <Card css={{ width: 300, padding: '$0' }}>
      <ContentLoader
        speed={2}
        width={300}
        height={60}
        backgroundColor={darkColors.intentsBase11}
        foregroundColor={darkColors.gray6}
      >
        <ContentLoader.Rect x="10" y="10" width="30" height="30" rx="4" />
        <ContentLoader.Rect
          x="10"
          stickX="right"
          y="10"
          stickY="bottom"
          width="30"
          height="30"
          rx="4"
        />
      </ContentLoader>
    </Card>
  );
};
