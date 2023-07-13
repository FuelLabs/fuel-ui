import { render, screen, testA11y } from '@fuels/jest';

import { RadioGroup } from './RadioGroup';

const Content = () => (
  <RadioGroup defaultValue="default" aria-label="View density">
    <RadioGroup.Item value="default" id="r1" label="Default" />
    <RadioGroup.Item value="comfortable" id="r2" label="Comfortable" />
    <RadioGroup.Item value="compact" id="r3" label="Compact" />
  </RadioGroup>
);

describe('RadioGroup', () => {
  it('a11y', async () => {
    await testA11y(<Content />);
  });

  it('should focus correctly', async () => {
    const { user } = render(<Content />);

    await user.tab();
    expect(screen.getByLabelText('Default')).toHaveFocus();
    await user.press('ArrowDown');
    expect(screen.getByLabelText('Comfortable')).toHaveFocus();
    await user.press('ArrowDown');
    expect(screen.getByLabelText('Compact')).toHaveFocus();
  });
});
