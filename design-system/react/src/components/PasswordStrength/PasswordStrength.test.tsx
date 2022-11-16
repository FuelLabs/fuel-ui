import { render } from '@fuel-ui/test-utils';

import { Button } from '../Button';

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
});
