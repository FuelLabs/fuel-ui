import { toCSSValue } from '~/utils/css';

export function Rect({
  x,
  y,
  stickX,
  stickY,
  ...props
}: React.SVGProps<SVGRectElement> & {
  stickX?: 'right' | 'left';
  stickY?: 'top' | 'bottom';
}) {
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
  return <rect x={finalX} y={finalY} {...props} />;
}
