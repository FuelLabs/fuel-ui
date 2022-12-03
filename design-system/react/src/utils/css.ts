export function getCSSValue(value?: string | number | undefined) {
  const valueNormalized = String(value).replace(/px/gi, '');
  if (!Number.isNaN(Number(valueNormalized))) {
    return `${value}px`;
  }
  return value;
}
