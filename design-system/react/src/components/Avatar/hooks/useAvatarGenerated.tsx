import { css, lightColors } from '@fuel-ui/css';
import { toSvg } from 'jdenticon';
import { useMemo } from 'react';

const SIZES = {
  xsm: 24,
  sm: 32,
  md: 40,
  lg: 52,
  xl: 80,
  '2xl': 100,
};

function getBackgroundColor(
  backgroundColor?: string,
  hash?: string
): string | undefined {
  if (backgroundColor === 'fuel') return lightColors.brand;
  if (backgroundColor !== 'random') return backgroundColor;
  if (!hash) return hash;

  const numberHash = [...hash].reduce(
    (prev, _cur, i) => hash.charCodeAt(i) + ((prev << 5) - prev),
    0
  );
  return [0, 0, 0].reduce(
    (prev, _v, i) =>
      `${prev}${`00${((numberHash >> (i * 8)) & 0xff).toString(16)}`.slice(
        -2
      )}`,
    '#'
  );
}

type UseAvatarGeneratedProps = {
  background?: string;
  hash?: string;
  size: string;
};

export function useAvatarGenerated({
  background,
  hash,
  size,
}: UseAvatarGeneratedProps) {
  const totalSize = SIZES[size];
  const backColor = getBackgroundColor(background, hash);
  const className = useMemo(
    () => css({ background: backColor })(),
    [backColor]
  );
  const svgString = toSvg(hash, totalSize, {
    backColor: 'transparent',
    padding: 0.15,
  }).replace('<svg', `<svg class="${className}"`);

  return {
    svgString,
    totalSize,
  };
}
