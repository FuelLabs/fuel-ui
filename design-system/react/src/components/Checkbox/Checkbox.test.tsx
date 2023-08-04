import { testA11y } from '@fuels/jest';

import { Form } from '../Form';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('a11y', async () => {
    await testA11y(
      <Form.Control css={{ flexDirection: 'row' }}>
        <Checkbox defaultChecked id="c1" aria-label="Accept terms" />
        <Form.Label htmlFor="c1">Accept terms and condition</Form.Label>
      </Form.Control>,
    );
  });
});
