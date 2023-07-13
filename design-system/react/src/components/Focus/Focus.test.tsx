import { render, screen, testA11y } from '@fuels/jest';

import { Stack } from '../Box/Stack';
import { Button } from '../Button';

import { Focus } from './Focus';

describe('Focus', () => {
  it('a11y', async () => {
    await testA11y(
      <Focus.ArrowNavigator autoFocus>
        <Stack gap="$3" direction="row">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </Stack>
      </Focus.ArrowNavigator>,
    );
  });

  it('should have focus navigation usings arrows', async () => {
    const { user } = render(
      <Focus.ArrowNavigator autoFocus>
        <Stack gap="$3" direction="row">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </Stack>
      </Focus.ArrowNavigator>,
    );

    expect(await screen.findByText('First')).toHaveFocus();
    await user.press('ArrowRight');
    expect(await screen.findByText('Second')).toHaveFocus();
    await user.press('ArrowRight');
    expect(await screen.findByText('Third')).toHaveFocus();
    await user.press('ArrowLeft');
    expect(await screen.findByText('Second')).toHaveFocus();
    await user.press('ArrowLeft');
    expect(await screen.findByText('First')).toHaveFocus();
  });
});
