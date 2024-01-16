import type { LayerVariant } from '@fuel-ui/css';
import { mergeProps } from 'react-aria';
import { useStyles, createStyle } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';

import type * as t from './defs';

const _ButtonLink = _unstable_createComponent<t.ButtonLinkDef>(
  Components.ButtonLink,
  ({ isExternal, as = 'a', role = 'link', size, ...props }) => {
    const classes = useStyles(styles, props);
    const allprops = mergeProps(props, classes.root, {
      ...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
        rightIcon: 'Link' as ButtonProps['rightIcon'],
      }),
      variant: 'link' as LayerVariant,
      isLink: true,
      role,
      size,
    });
    return <Button as={as} {...allprops} />;
  },
);

export const ButtonLink =
  createPolymorphicComponent<t.ButtonLinkDef>(_ButtonLink);

const styles = createStyle(Components.ButtonLink, {
  root: {},
});
