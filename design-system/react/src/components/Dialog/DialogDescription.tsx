import { cx } from '@fuel-ui/css';
import * as RDialog from '@radix-ui/react-dialog';

import { createComponent, createStyledElement } from '../../utils';

import * as styles from './styles';

export type DialogDescriptionProps = RDialog.DialogTitleProps;

export const DialogDescription = createComponent<DialogDescriptionProps>(
  ({ className, children, ...props }) => {
    const classes = cx(
      'fuel_dialog--description',
      className,
      styles.description()
    );
    return createStyledElement(
      RDialog.Description,
      styles.description,
      null,
      { ...props, className: classes },
      children
    );
  }
);
