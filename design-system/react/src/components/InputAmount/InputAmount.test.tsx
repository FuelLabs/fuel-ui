import type { BN } from '@fuel-ts/math';
import { bn } from '@fuel-ts/math';
import { fireEvent, render, screen, testA11y } from '@fuels/jest';
import { useState } from 'react';

import type { InputAmountProps } from './InputAmount';
import { InputAmount } from './InputAmount';
import { DECIMAL_UNITS } from './utils';

const AMOUNT_TEXT = `14.563`;
const FIELD_NAME = 'Input Amount';
const MOCK_BALANCE = {
  assetId: '0x0000000000000000000000000000000000000000000000000000000000000000',
  amount: bn.parseUnits(AMOUNT_TEXT),
};
const MOCK_ASSET = {
  name: 'USD',
  address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
};

function Content({ onChange, ...props }: Partial<InputAmountProps>) {
  const [val, setVal] = useState<BN | null>(bn(0));

  function handleChange(val: BN | null) {
    onChange?.(val);
    setVal(val);
  }

  return (
    <InputAmount
      name={FIELD_NAME}
      balance={MOCK_BALANCE.amount}
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

  it.each([DECIMAL_UNITS, 18])(
    'should input correctly a fraction',
    async (units) => {
      render(<Content onChange={onChange} units={units} />);

      const input = screen.getByLabelText(FIELD_NAME);
      const INPUT_VALUE = '0.5';
      fireEvent.input(input, { target: { value: INPUT_VALUE } });
      expect(input.getAttribute('value')).toBe(INPUT_VALUE);
      expect(onChange).toBeCalledWith(bn.parseUnits(INPUT_VALUE, units));
    },
  );

  it.each([DECIMAL_UNITS, 18])(
    'should input correctly(units: %i) a fraction without the zero. for example .5',
    async (units) => {
      render(<Content onChange={onChange} units={units} />);

      const input = screen.getByLabelText(FIELD_NAME);
      const INPUT_VALUE = '0.5';
      fireEvent.input(input, { target: { value: '.5' } });
      expect(input.getAttribute('value')).toBe(INPUT_VALUE);
      expect(onChange).toBeCalledWith(bn.parseUnits(INPUT_VALUE, units));
    },
  );

  it.each([DECIMAL_UNITS, 18])(
    'should input correctly(units: %i) a 1 integer and 1 unit value. for example 1.000000001 for 9 units or 1.000000000000000001 for 18 units.',
    async (units) => {
      render(<Content onChange={onChange} units={units} />);

      const input = screen.getByLabelText(FIELD_NAME);
      const INPUT_VALUE = bn
        .parseUnits('1', units)
        .add(1)
        .format({ precision: units, units });
      fireEvent.input(input, { target: { value: INPUT_VALUE } });
      expect(input.getAttribute('value')).toBe(INPUT_VALUE);
      expect(onChange).toBeCalledWith(bn.parseUnits(INPUT_VALUE, units));
    },
  );

  it.each([DECIMAL_UNITS, 18])(
    'should input correctly(units: %i) trailing zeros',
    async (units) => {
      render(<Content onChange={onChange} units={units} />);
      const input = screen.getByLabelText(FIELD_NAME);

      const INPUT_VALUE = '1.000';
      fireEvent.input(input, { target: { value: INPUT_VALUE } });
      expect(input.getAttribute('value')).toBe(INPUT_VALUE);
      expect(onChange).toBeCalledWith(bn.parseUnits(INPUT_VALUE, units));
    },
  );

  it('should show placeholder', () => {
    render(<InputAmount value={bn(0)} />);
    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
  });

  it('should show placeholder after getting set to undefined', () => {
    render(<Content onChange={onChange} />);
    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
    const input = screen.getByLabelText(FIELD_NAME);
    fireEvent.input(input, { target: { value: 0.5 } });
    expect(input.getAttribute('value')).toBe('0.5');
    fireEvent.input(input, { target: { value: undefined } });
    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
  });

  it.each([DECIMAL_UNITS, 18])(
    'should show balance formatted (units: %i)',
    (units) => {
      const balance = bn.parseUnits('100', units);
      const formattedBalance = bn
        .parseUnits('100', units)
        .format({ precision: 3, units });
      render(<InputAmount balance={balance} units={units} />);
      expect(
        screen.getByLabelText(`Balance: ${formattedBalance}`),
      ).toBeInTheDocument();
    },
  );

  it.each([DECIMAL_UNITS, 18])(
    'should show balance formatted for full units balance precision (units: %i)',
    (units) => {
      const balance = bn.parseUnits('100', units);
      const formattedBalance = bn
        .parseUnits('100', units)
        .format({ precision: 3, units });
      render(<InputAmount balance={balance} units={units} />);
      expect(
        screen.getByLabelText(`Balance: ${formattedBalance}`),
      ).toBeInTheDocument();
    },
  );

  it('should display balance in input when click on max button', async () => {
    const { user } = render(<InputAmount balance={MOCK_BALANCE.amount} />);
    const maxBtn = screen.getByLabelText('Max');
    expect(maxBtn).toBeInTheDocument();
    await user.click(maxBtn);
    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
    expect(
      screen.getByLabelText(`Balance: ${AMOUNT_TEXT}`),
    ).toBeInTheDocument();
  });

  it('should hidden Balance when prop hiddenBalance is true', async () => {
    render(<InputAmount hiddenBalance={true} balance={MOCK_BALANCE.amount} />);
    expect(() => screen.getByLabelText(`Balance: ${AMOUNT_TEXT}`)).toThrow();
  });

  it('should hidden Max Button when prop hiddenMaxButton is true', async () => {
    render(
      <InputAmount hiddenMaxButton={true} balance={MOCK_BALANCE.amount} />,
    );
    expect(() => screen.getByLabelText('Max')).toThrow();
  });

  it('should hidden action when balance is undefined', async () => {
    render(<InputAmount />);
    expect(() => screen.getByLabelText(`Balance: ${AMOUNT_TEXT}`)).toThrow();
    expect(() => screen.getByLabelText('Max')).toThrow();
  });

  it('should show actions when balance is 0', async () => {
    render(<InputAmount balance={bn(0)} />);
    expect(screen.getByLabelText('Balance: 0.0')).toBeInTheDocument();
    expect(screen.getByLabelText('Max')).toBeInTheDocument();
  });

  it('should show asset generated image when asset address is passed with no imageUrl', async () => {
    render(<InputAmount asset={MOCK_ASSET} balance={MOCK_BALANCE.amount} />);
    expect(
      screen.getByLabelText(`${MOCK_ASSET.name} generated image`),
    ).toBeInTheDocument();
  });
});
