import type { ColorKeys, Colors } from '@fuel-ui/css';
import { css, darkColors, keyframes, cx } from '@fuel-ui/css';
import { createElement, useMemo } from 'react';

import { createComponent2 } from '../../utils';

import type * as t from './types';

import { useElementProps } from '~/hooks';
import { Components } from '~/types';
import { fClass } from '~/utils/css';

export const Spinner = createComponent2<t.SpinnerDef>(
  Components.Spinner,
  ({ size = 24, color = 'accent9', className, ...props }) => {
    const styles = useMemo(() => getStyles(size, color), [size]);
    const classes = cx(fClass(Components.Spinner), className, styles());
    const viewBox = `0 0 ${size} ${size}`;
    const elementProps = useElementProps(props, {
      viewBox,
      className: classes,
    });
    return createElement(
      'svg',
      elementProps,
      <>
        <circle cx={size / 2} cy={size / 2} r={size * 0.4} className="bg" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.4}
          className="animated"
        />
      </>
    );
  }
);

function getStyles(size: number, color: Colors | ColorKeys | string) {
  const strokeColor = darkColors[color] || darkColors[`${color}`] || color;
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
