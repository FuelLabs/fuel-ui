import { cx } from '@fuel-ui/css';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

import { createComponent, createStyledElement } from '../../utils';

export type AspectRatioProps = AspectRatioPrimitive.AspectRatioProps;

export const AspectRatio = createComponent<AspectRatioProps>(
  ({ children, className, ...props }) => {
    const classes = cx('fuel_aspect-ratio', className);
    return createStyledElement(
      AspectRatioPrimitive.Root,
      null,
      null,
      { ...props, className: classes },
      children
    );
  }
);
