import type { LayerVariant } from '@fuel-ui/css';
import { createElement } from 'react';

import { _unstable_createComponent } from '../../utils';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';

import type * as t from './defs';

import { Components } from '~/defs';
import { useStyles, useElementProps, createStyle } from '~/hooks';

export const ButtonLink = _unstable_createComponent<t.ButtonLinkDef>(
  Components.ButtonLink,
  ({ isExternal = false, size, as, onPress, ...props }) => {
    const classes = useStyles(styles, props);
    const elementProps = useElementProps(props, classes.root);
    const allProps = {
      ...elementProps,
      ...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
        rightIcon: 'Link' as ButtonProps['rightIcon'],
      }),
      role: 'link',
      variant: 'link' as LayerVariant,
      size,
      isLink: true,
      as,
      onPress,
    };
    return createElement(Button, allProps);
  }
);

const styles = createStyle(Components.ButtonLink, {
  root: {},
});
