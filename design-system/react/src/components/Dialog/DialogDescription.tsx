import { cx, styled } from '@fuel-ui/css';
import { createElement } from 'react';

import { createComponent } from '../../utils';

import * as styles from './styles';

export type DialogDescriptionProps = {
  className?: string;
};

const Root = styled('div', styles.description);

export const DialogDescription = createComponent<DialogDescriptionProps>(
  ({ className, children, ...props }) => {
    const classes = cx(
      'fuel_dialog--description',
      className,
      styles.description()
    );
    return createElement(Root, { ...props, className: classes }, children);
  }
);
