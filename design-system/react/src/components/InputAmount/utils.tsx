import type { BNInput, FormatConfig } from '@fuel-ts/math';
import { bn, DECIMAL_UNITS, DEFAULT_PRECISION } from '@fuel-ts/math';

export function formatAmountLeadingZeros(text: string): string {
  const valueWithoutLeadingZeros = text
    .replace(/^0\d/, (substring) => substring.replace(/^0+(?=[\d])/, ''))
    .replace(/^0+(\d\.)/, '$1');
  const startsWithPoint = valueWithoutLeadingZeros.startsWith('.');

  if (!startsWithPoint) {
    return valueWithoutLeadingZeros;
  }
  if (valueWithoutLeadingZeros.length < 3) {
    return `0${valueWithoutLeadingZeros}`;
  }
  return text;
}

export function createAmount(text: string, units: number = DECIMAL_UNITS) {
  const textAmountFixed = formatAmountLeadingZeros(text);
  return {
    text: textAmountFixed,
    amount: bn.parseUnits(text, units),
  };
}

export function formatAmount(amount: BNInput, opts: FormatConfig = {}) {
  const { precision = DEFAULT_PRECISION, units = DECIMAL_UNITS } = opts;
  return bn(amount).format({ precision, units });
}
