import { testA11y } from '@fuel-ui/test-utils';

import { FuelLogo } from './FuelLogo';

describe('FuelLogo', () => {
  it('a11y', async () => {
    await testA11y(<FuelLogo />);
  });
});
