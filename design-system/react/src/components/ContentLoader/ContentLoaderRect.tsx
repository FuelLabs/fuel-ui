import { getCSSValue } from '~/utils/css';

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
  const xValue = getCSSValue(x);
  const yValue = getCSSValue(y);
  let finalX = x;
  let finalY = y;
  if (stickX === 'right') {
    finalX = `calc(100% - ${xValue} - ${getCSSValue(props.width)})`;
  }
  if (stickY === 'bottom') {
    finalY = `calc(100% - ${yValue} - ${getCSSValue(props.height)})`;
  }
  return <rect x={finalX} y={finalY} {...props} />;
}
