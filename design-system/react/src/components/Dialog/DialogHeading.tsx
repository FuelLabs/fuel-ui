import { cx, styled } from '@fuel-ui/css';
import { createElement } from 'react';
import type { ReactNode } from 'react';

import { useDialog } from '..';
import { createComponent } from '../../utils';

import * as styles from './styles';

export type DialogHeadingProps = {
  children?: ReactNode;
  className?: string;
};

const Root = styled('h2', styles.heading);

export const DialogHeading = createComponent<DialogHeadingProps>(
  ({ className, children, ...props }) => {
    const { headingProps } = useDialog();
    const classes = cx('fuel_dialog--heading', className);
    return createElement(
      Root,
      { ...headingProps, ...props, className: classes },
      children
    );
  }
);
