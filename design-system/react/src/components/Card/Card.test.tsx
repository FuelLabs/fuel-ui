import { testA11y } from '@fuel-ui/test-utils';

import { Card } from './Card';

describe('Card', () => {
  it('a11y', async () => {
    await testA11y(<Card>Hello world</Card>);
  });
});
