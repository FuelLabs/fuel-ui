import { cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import type { HTMLProps } from '../../utils';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';

export type ButtonLinkProps = ButtonProps &
  HTMLProps['a'] & {
    isExternal?: boolean;
  };

export const ButtonLink = createComponent<ButtonLinkProps>(
  ({ as = 'a', role = 'link', isExternal, className, ...props }) => {
    const customProps = {
      ...props,
      className: cx('fuel_button-link', className),
      ...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
        rightIcon: 'LinkSimple' as ButtonProps['rightIcon'],
      }),
    };
    return (
      <Button as={as} {...customProps} variant="link" role={role} isLink />
    );
  }
);
