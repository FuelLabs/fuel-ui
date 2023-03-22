import { cx } from '@fuel-ui/css';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { createElement } from 'react';

import { createComponent } from '../../utils';

import type { AspectRatioProps } from './types';

import { useComponentProps, useElementProps } from '~/hooks';
import { Components } from '~/types';
import { fClass } from '~/utils/css';

export const AspectRatio = createComponent<AspectRatioProps>((initProps) => {
  const props = useComponentProps(Components.AspectRatio, initProps);
  const classes = cx(fClass(Components.AspectRatio), props.className);
  const elementProps = useElementProps(props, { className: classes });
  return createElement(AspectRatioPrimitive.Root, elementProps);
});
