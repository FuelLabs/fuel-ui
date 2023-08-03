import { createElement } from 'react';
import { toCSSValue } from '~/utils/css';

import type { ContentLoaderRectProps } from './defs';

export function Rect({
  x,
  y,
  stickX,
  stickY,
  ...props
}: ContentLoaderRectProps) {
  const xValue = toCSSValue(x);
  const yValue = toCSSValue(y);
  let finalX = x;
  let finalY = y;
  if (stickX === 'right') {
    finalX = `calc(100% - ${xValue} - ${toCSSValue(props.width)})`;
  }
  if (stickY === 'bottom') {
    finalY = `calc(100% - ${yValue} - ${toCSSValue(props.height)})`;
  }
  return createElement('rect', {
    x: finalX,
    y: finalY,
    ...props,
  });
}
