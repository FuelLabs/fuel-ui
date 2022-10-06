import { testA11y } from '@fuel-ui/test-utils';

import { Copyable } from './Copyable';

describe('Copyable', () => {
  it('a11y', async () => {
    await testA11y(<Copyable value="Some value">Some value</Copyable>);
  });
});
