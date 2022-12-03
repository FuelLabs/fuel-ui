import type { BN } from '@fuel-ts/math';
import { bn } from '@fuel-ts/math';
import { fireEvent, render, screen, testA11y } from '@fuel-ui/test-utils';
import { useState } from 'react';

import type { InputAmountProps } from './InputAmount';
import { InputAmount } from './InputAmount';

export const MOCK_ASSET = {
  assetId: '0x0000000000000000000000000000000000000000000000000000000000000000',
  amount: bn(14563943834),
};
const FIELD_NAME = 'Input Amount';

function Content({ onChange, ...props }: Partial<InputAmountProps>) {
  const [val, setVal] = useState<BN>(bn(0));

  function handleChange(val: BN) {
    onChange?.(val);
    setVal(val);
  }

  return (
    <InputAmount
      name={FIELD_NAME}
      balance={MOCK_ASSET.amount}
      onChange={handleChange}
      value={bn(val)}
      {...props}
    />
  );
}

describe('InputAmount', () => {
  const onChange = jest.fn();

  it('a11y', async () => {
    await testA11y(<Content onChange={onChange} />);
  });

  it('should input correctly', async () => {
    render(<Content onChange={onChange} />);

    const input = screen.getByLabelText(FIELD_NAME);
    fireEvent.input(input, { target: { value: '0.5' } });
    expect(input.getAttribute('value')).toBe('0.5');
    expect(onChange).toBeCalledWith(bn(500000000));
  });

  it('should show placeholder', () => {
    render(<Content onChange={onChange} />);
    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
  });

  it('should show balance formatted', () => {
    render(<Content onChange={onChange} />);
    expect(screen.getByText('Balance: 14.563943834')).toBeInTheDocument();
  });

  it('should display balance in input when click on max button', async () => {
    const { user } = render(<Content onChange={onChange} />);

    const maxBtn = screen.getByLabelText('Max');
    expect(maxBtn).toBeInTheDocument();
    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();

    await user.click(maxBtn);
    expect(screen.getByDisplayValue('14.563943834')).toBeInTheDocument();
  });

  it('should unable to input more than balance', async () => {
    render(<Content balance={bn(500000000)} />);
    expect(screen.getByText('Balance: 0.5')).toBeInTheDocument();

    const input = screen.getByLabelText(FIELD_NAME);
    fireEvent.input(input, { target: { value: '0.6' } });

    expect(input.getAttribute('value')).toBe('0.6');
  });
});
