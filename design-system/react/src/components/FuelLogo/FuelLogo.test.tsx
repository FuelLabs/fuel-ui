import { testA11y } from '@fuels/jest';

import { FuelLogo } from './FuelLogo';

describe('FuelLogo', () => {
  it('a11y', async () => {
    await testA11y(<FuelLogo />);
  });
});
