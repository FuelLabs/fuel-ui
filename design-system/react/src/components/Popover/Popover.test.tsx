import { testA11y } from '@fuel-ui/test-utils';

import { Button } from '../Button';

import { Popover } from './Popover';

describe('Popover', () => {
  it('a11y', async () => {
    await testA11y(
      <Popover content={<div>Hello world</div>}>
        <Button>Click here</Button>
      </Popover>
    );
  });
});
