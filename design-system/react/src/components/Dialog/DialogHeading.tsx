import { cx } from '@fuel-ui/css';
import type { ReactNode } from 'react';

import { useDialog } from '..';
import { createComponent, useCreateStyledElement } from '../../utils';

import * as styles from './styles';

export type DialogHeadingProps = {
  children?: ReactNode;
  className?: string;
};

export const DialogHeading = createComponent<DialogHeadingProps>(
  ({ as = 'h2', className, children, ...props }) => {
    const { headingProps } = useDialog();
    const classes = cx('fuel_DialogHeading', className);
    const nextProps = { ...headingProps, ...props, className: classes };
    return useCreateStyledElement(
      as,
      styles.heading,
      null,
      nextProps,
      children,
    );
  },
);
