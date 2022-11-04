import { cx } from '@fuel-ui/css';

import { createComponent, createStyledElement } from '../../utils';
import type { HTMLProps } from '../../utils';

export type ImageProps = HTMLProps['img'];

export const Image = createComponent<ImageProps>(
  ({ children, className, ...props }) => {
    const classes = cx('fuel_image', className);
    return createStyledElement(
      'img',
      null,
      null,
      { ...props, className: classes },
      children
    );
  }
);
