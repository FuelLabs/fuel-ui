import { render } from '@fuel-ui/test-utils';
import { useState } from 'react';

import { Stack } from '../Box/Stack';
import { Button } from '../Button';
import { InputPassword } from '../InputPassword';

import { PasswordStrength } from './PasswordStrength';
import { PasswordDictionary } from './constants';
import { passwordStrengthCalculator } from './utils';

const strongPassword = '12345LF@ik&!';
const averagePassword = 'L@w2';
const weakPassword = '12345678';

describe('PasswordStrength', () => {
  it('should render a weak password', async () => {
    const { findByText } = render(
      <PasswordStrength password={weakPassword} open>
        <Button></Button>
      </PasswordStrength>
    );

    expect(PasswordDictionary[passwordStrengthCalculator(weakPassword)]).toBe(
      'Weak'
    );
    expect(
      await findByText(
        PasswordDictionary[passwordStrengthCalculator(weakPassword)]
      )
    ).toBeDefined();
  });

  it('should render a weak password if password minimum length is 8', async () => {
    const { findByText } = render(
      <PasswordStrength password="123456" open>
        <Button></Button>
      </PasswordStrength>
    );

    expect(PasswordDictionary[passwordStrengthCalculator(weakPassword)]).toBe(
      'Weak'
    );
    expect(
      await findByText(
        PasswordDictionary[passwordStrengthCalculator(weakPassword)]
      )
    ).toBeDefined();
  });

  it('should render a average password', async () => {
    const { findByText } = render(
      <PasswordStrength password={averagePassword} open>
        <Button></Button>
      </PasswordStrength>
    );

    expect(
      PasswordDictionary[passwordStrengthCalculator(averagePassword)]
    ).toBe('Average');
    expect(
      await findByText(
        PasswordDictionary[passwordStrengthCalculator(averagePassword)]
      )
    ).toBeDefined();
  });

  it('should render a strong password', async () => {
    const { findByText } = render(
      <PasswordStrength password={strongPassword} open>
        <Button></Button>
      </PasswordStrength>
    );

    expect(PasswordDictionary[passwordStrengthCalculator(strongPassword)]).toBe(
      'Strong'
    );
    expect(
      await findByText(
        PasswordDictionary[passwordStrengthCalculator(strongPassword)]
      )
    ).toBeDefined();
  });

  it('should focus input when user press tab', async () => {
    const WithInput = () => {
      const [password, setPassword] = useState('');
      const [open, setOpen] = useState(false);

      return (
        <Stack css={{ maxW: '350px' }}>
          <PasswordStrength
            onOpenChange={() => setOpen(true)}
            password={password}
            open={open}
          >
            <InputPassword
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setOpen(true)}
              onBlur={() => setOpen(false)}
              value={password}
              placeholder="Type your password"
            />
          </PasswordStrength>
        </Stack>
      );
    };

    const { user, findByPlaceholderText } = render(<WithInput />);

    // create test to make sure when user press tab, input is focused
    await user.tab();
    const input = await findByPlaceholderText('Type your password');
    expect(input).toHaveFocus();
  });
});
