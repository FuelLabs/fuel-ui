import type { ColorKeys, Colors } from '@fuel-ui/css';
import { css, darkColors, keyframes, cx } from '@fuel-ui/css';
import { useMemo } from 'react';
import { Components } from '~/utils/components-list';
import { fClass } from '~/utils/css';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';

import type * as t from './defs';

export const Spinner = _unstable_createComponent<t.SpinnerDef>(
  Components.Spinner,
  ({ size = 24, color = 'brand', className, ...props }) => {
    const styles = useMemo(() => getStyles(size, color), [size]);
    const classes = cx(fClass(Components.Spinner), className, styles());
    const viewBox = `0 0 ${size} ${size}`;
    return _unstable_createEl(
      'svg',
      { ...props, className: classes, viewBox },
      <>
        <circle cx={size / 2} cy={size / 2} r={size * 0.4} className="bg" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.4}
          className="animated"
        />
      </>,
    );
  },
);

function getStyles(size: number, color: Colors | ColorKeys | string) {
  const strokeColor = String(
    darkColors[color] || darkColors[`${color}`] || color,
  );

  const animation = keyframes({
    '0%': {
      strokeDashoffset: 0.66 * size,
      transform: 'rotate(0deg)',
    },
    '50%': {
      strokeDashoffset: 3.14 * size,
      transform: 'rotate(720deg)',
    },
    '100%': {
      strokeDashoffset: 0.66 * size,
      transform: 'rotate(1080deg)',
    },
  });

  return css({
    x: 0,
    y: 0,
    width: `${size}px`,
    height: `${size}px`,
    viewBox: `0 0 ${size} ${size}`,

    'circle.animated': {
      zIndex: 0,
      fill: 'transparent',
      stroke: strokeColor,
      strokeWidth: size * 0.1,
      strokeLinecap: 'round',
      strokeDasharray: 3.14 * size,
      transformOrigin: `calc(0.5px * ${size}) calc(0.5px * ${size}) 0`,
      animation: `${animation} 2.2s linear infinite`,
    },

    'circle.bg': {
      fill: 'transparent',
      stroke: '$blackA7',
      strokeWidth: size * 0.1,
      strokeLinecap: 'round',
      strokeDasharray: 3.14 * size,
    },
  });
}
