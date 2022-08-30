import { lightColors } from '@fuel-ui/css';

export const getBackgroundColor = (
  backgroundColor?: string,
  unique?: string
): string | undefined => {
  if (backgroundColor === 'fuel') return lightColors.brand;
  if (backgroundColor !== 'random') return backgroundColor;
  if (!unique) return unique;

  const hash = [...unique].reduce((prev, cur, i) => unique.charCodeAt(i) + ((prev << 5) - prev), 0);
  return [0, 0, 0].reduce(
    (prev, v, i) => `${prev}${`00${((hash >> (i * 8)) & 0xff).toString(16)}`.slice(-2)}`,
    '#'
  );
};
