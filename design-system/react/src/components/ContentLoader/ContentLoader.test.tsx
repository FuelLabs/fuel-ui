import { darkColors } from '@fuel-ui/css';
import { testA11y } from '@fuels/jest';

import { ContentLoader } from './ContentLoader';

describe('ContentLoader', () => {
  it('a11y', async () => {
    await testA11y(
      <ContentLoader
        speed={2}
        width={300}
        height={60}
        backgroundColor={darkColors.gray2}
        foregroundColor={darkColors.gray3}
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
      </ContentLoader>,
    );
  });
});
