import { testA11y } from '@fuels/jest';

import { HelperIcon } from './HelperIcon';

describe('HelperIcon', () => {
  it('a11y', async () => {
    await testA11y(
      <HelperIcon message="This is a helper message">
        Some information
      </HelperIcon>,
    );
  });
});
