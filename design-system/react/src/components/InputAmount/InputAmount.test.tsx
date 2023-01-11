import type { BN } from '@fuel-ts/math';
import { bn } from '@fuel-ts/math';
import { act, fireEvent, render, screen, testA11y } from '@fuel-ui/test-utils';
import { useState } from 'react';

import type { InputAmountProps } from './InputAmount';
import { InputAmount } from './InputAmount';
import { formatAmount } from './utils';

const AMOUNT_TEXT = `14.563943834`;
const BALANCE_TEXT = bn.parseUnits(AMOUNT_TEXT).format({ precision: 3 });
const FIELD_NAME = 'Input Amount';
export const MOCK_ASSET = {
  assetId: '0x0000000000000000000000000000000000000000000000000000000000000000',
  amount: bn.parseUnits(AMOUNT_TEXT),
};

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
  let onChange: jest.Mock;

  beforeEach(() => {
    onChange = jest.fn();
  });

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

  it('should correct inputed values', async () => {
    render(<Content onChange={onChange} />);
    const input = screen.getByLabelText(FIELD_NAME);

    fireEvent.input(input, { target: { value: '.3' } });
    expect(input.getAttribute('value')).toBe('0.3');
    expect(onChange).toBeCalledWith(bn(300000000));

    fireEvent.input(input, { target: { value: '1.000000001' } });
    expect(input.getAttribute('value')).toBe('1.000000001');
    expect(onChange).toBeCalledWith(bn(1000000001));

    fireEvent.input(input, { target: { value: '1.000' } });
    expect(input.getAttribute('value')).toBe('1.000');
    expect(onChange).toBeCalledWith(bn(1000000000));
  });

  it('should show placeholder', () => {
    render(<InputAmount value={bn(0)} />);
    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
  });

  it('should show balance formatted', () => {
    render(<InputAmount balance={MOCK_ASSET.amount} />);
    expect(screen.getByText(`Balance: ${BALANCE_TEXT}`)).toBeInTheDocument();
  });

  it('should display balance in input when click on max button', async () => {
    render(<InputAmount balance={MOCK_ASSET.amount} />);
    const maxBtn = screen.getByLabelText('Max');
    expect(maxBtn).toBeInTheDocument();
    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
    act(() => {
      maxBtn.click();
    });
    expect(screen.getByDisplayValue(AMOUNT_TEXT)).toBeInTheDocument();
  });

  it('should hidden Balance when prop hiddenBalance is true', async () => {
    render(<InputAmount hiddenBalance={true} balance={MOCK_ASSET.amount} />);
    expect(() => screen.getByText(`Balance: ${AMOUNT_TEXT}`)).toThrow(
      /Unable to find an element/
    );
  });

  it('should hidden Max Button when prop hiddenMaxButton is true', async () => {
    render(<InputAmount hiddenMaxButton={true} balance={MOCK_ASSET.amount} />);
    expect(() => screen.getByLabelText('Max')).toThrow(
      /Unable to find a label with the text/
    );
  });

  it('should hidden action when balance is undefined', async () => {
    render(<InputAmount />);
    expect(() => screen.getByText(`Balance: ${AMOUNT_TEXT}`)).toThrow(
      /Unable to find an element/
    );
    expect(() => screen.getByLabelText('Max')).toThrow(
      /Unable to find a label with the text/
    );
  });

  it('should discount fee when hit max button if has fee prop', async () => {
    const fee = bn.parseUnits('0.100');
    render(
      <InputAmount name={FIELD_NAME} balance={MOCK_ASSET.amount} fee={fee} />
    );
    const maxBtn = screen.getByLabelText('Max');
    expect(maxBtn).toBeInTheDocument();
    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
    act(() => maxBtn.click());
    const input = screen.getByLabelText(FIELD_NAME);
    const balanceLessFee = MOCK_ASSET.amount.sub(fee);
    expect(input.getAttribute('value')).toBe(formatAmount(balanceLessFee));
  });

  it('should show actions when balance is 0', async () => {
    render(<InputAmount balance={bn(0)} />);
    expect(screen.getByText('Balance: 0.0')).toBeInTheDocument();
    expect(screen.getByLabelText('Max')).toBeInTheDocument();
  });
});
