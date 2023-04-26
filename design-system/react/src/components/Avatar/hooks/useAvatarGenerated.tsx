const SIZES = {
  xsm: 24,
  sm: 32,
  md: 40,
  lg: 52,
  xl: 80,
  '2xl': 100,
};

function getFixedGradientDirection(hash: string) {
  const sum = hash
    .slice(4, 7)
    .split('')
    .reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);

  return `${sum}deg`;
}

function hashToGradient(hash: string): string {
  const direction = getFixedGradientDirection(hash);
  const color1 = hash.slice(4, 10);
  const color2 = hash.slice(8, 14);
  const stops = [`#${color1} 0%`, `#${color2} 100%`];
  return `linear-gradient(${direction}, ${stops.join(', ')})`;
}

type UseAvatarGeneratedProps = {
  hash?: string;
  size: string;
};

export function useAvatarGenerated({ hash, size }: UseAvatarGeneratedProps) {
  const totalSize = SIZES[size];
  const background = hashToGradient(hash!);

  return {
    background,
    totalSize,
  };
}
