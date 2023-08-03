import { testA11y } from '@fuels/jest';

import { Switch } from './Switch';

describe('Switch', () => {
  it('a11y', async () => {
    await testA11y(
      <Switch defaultChecked id="s1" aria-label="Default switch" />,
    );
  });
});
