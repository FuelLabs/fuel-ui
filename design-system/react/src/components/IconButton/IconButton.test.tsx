import { testA11y } from '@fuel-ui/test-utils';

import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('a11y', async () => {
    await testA11y(<IconButton aria-label="Calendar Button" icon="Calendar" />);
  });
});
