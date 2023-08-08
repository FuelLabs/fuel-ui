import { render } from '@fuels/jest';
import { useState } from 'react';

import { PasswordDictionary } from '../../utils/constants';
import { passwordStrengthCalculator } from '../../utils/password-strength';
import unsafePasswords from '../../utils/unsafe-passwords.json';
import { Stack } from '../Box/Stack';
import { Button } from '../Button';
import { InputPassword } from '../InputPassword';

import { PasswordStrength } from './PasswordStrength';

const strongPassword = '12345LF@ik&!';
const averagePassword = 'L@w2';
const weakPassword = '12345678';

describe('PasswordStrength', () => {
  it('should render a weak password', async () => {
    const { findByText } = render(
      <PasswordStrength password={weakPassword} open>
        <Button></Button>
      </PasswordStrength>,
    );

    expect(
      PasswordDictionary[
        passwordStrengthCalculator(weakPassword, unsafePasswords)
      ],
    ).toBe('Weak');
    expect(
      await findByText(
        PasswordDictionary[
          passwordStrengthCalculator(weakPassword, unsafePasswords)
        ],
      ),
    ).toBeDefined();
  });

  it('should render a weak password if password minimum length is 8', async () => {
    const { findByText } = render(
      <PasswordStrength password="123456" open>
        <Button></Button>
      </PasswordStrength>,
    );

    expect(
      PasswordDictionary[
        passwordStrengthCalculator(weakPassword, unsafePasswords)
      ],
    ).toBe('Weak');
    expect(
      await findByText(
        PasswordDictionary[
          passwordStrengthCalculator(weakPassword, unsafePasswords)
        ],
      ),
    ).toBeDefined();
  });

  it('should render a average password', async () => {
    const { findByText } = render(
      <PasswordStrength password={averagePassword} open>
        <Button></Button>
      </PasswordStrength>,
    );

    expect(
      PasswordDictionary[
        passwordStrengthCalculator(averagePassword, unsafePasswords)
      ],
    ).toBe('Average');
    expect(
      await findByText(
        PasswordDictionary[
          passwordStrengthCalculator(averagePassword, unsafePasswords)
        ],
      ),
    ).toBeDefined();
  });

  it('should render a strong password', async () => {
    const { findByText } = render(
      <PasswordStrength password={strongPassword} open>
        <Button></Button>
      </PasswordStrength>,
    );

    expect(
      PasswordDictionary[
        passwordStrengthCalculator(strongPassword, unsafePasswords)
      ],
    ).toBe('Strong');
    expect(
      await findByText(
        PasswordDictionary[
          passwordStrengthCalculator(strongPassword, unsafePasswords)
        ],
      ),
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

  it('should fill 1 levels as strength weak', async () => {
    const container = document.createElement('div');
    render(<PasswordStrength.Indicator strength={'weak'} />, {
      container,
    });
    const elements = container.querySelectorAll('[data-strength="weak"]');
    expect(elements.length).toBe(1);
  });

  it('should fill 2 levels as strength weak', async () => {
    const container = document.createElement('div');
    render(<PasswordStrength.Indicator strength={'average'} />, {
      container,
    });
    const elements = container.querySelectorAll('[data-strength="average"]');
    expect(elements.length).toBe(2);
  });

  it('should fill all levels when strength strong', async () => {
    const container = document.createElement('div');
    render(<PasswordStrength.Indicator strength={'strong'} />, {
      container,
    });
    const elements = container.querySelectorAll('[data-strength="strong"]');
    expect(elements.length).toBe(3);
  });
});
