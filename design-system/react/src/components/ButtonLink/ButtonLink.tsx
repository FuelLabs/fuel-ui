import type { LayerVariant } from '@fuel-ui/css';
import { createElement } from 'react';
import { mergeProps } from 'react-aria';

import { _unstable_createComponent } from '../../utils';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';

import type * as t from './defs';

import { Components } from '~/defs';
import { useStyles, useElementProps, createStyle } from '~/hooks';

export const ButtonLink = _unstable_createComponent<t.ButtonLinkDef>(
  Components.ButtonLink,
  ({ isExternal, as = 'a', role = 'link', size, ...props }) => {
    const classes = useStyles(styles, props);
    const elementProps = useElementProps(props, classes.root);
    const allprops = mergeProps(elementProps, {
      ...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
        rightIcon: 'Link' as ButtonProps['rightIcon'],
      }),
      variant: 'link' as LayerVariant,
      isLink: true,
      as,
      role,
      size,
    });
    return createElement(Button, allprops);
  }
);

const styles = createStyle(Components.ButtonLink, {
  root: {},
});
