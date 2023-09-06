/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx } from '@fuel-ui/css';
import { mergeProps, useFocusRing, useLink } from 'react-aria';
import { createStyle, useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { Icon } from '../Icon';

import type * as t from './defs';

const _Link = _unstable_createComponent<t.LinkDef>(
  Components.Link,
  ({
    as: Root = 'a',
    isExternal,
    externalIcon = 'Link',
    children,
    color,
    css,
    ...props
  }) => {
    const { linkProps } = useLink(props as any, props.ref as any);
    const classes = useStyles(styles, {
      ...props,
      css: {
        ...css,
        color: color || css?.color || '$accent8',
      },
    });

    const customProps = {
      ...(Root !== 'a' ? { role: 'link' } : {}),
      ...(isExternal && { target: '_blank', rel: 'noopener noreferrer' }),
    };

    const { isFocusVisible, focusProps } = useFocusRing({
      isTextInput: false,
      within: true,
      autoFocus: props.autoFocus,
    });

    const className = cx(classes.root.className, { focused: isFocusVisible });
    const itemProps = mergeProps(props, customProps, linkProps, focusProps, {
      className,
    });

    return (
      <Root {...itemProps}>
        {children}{' '}
        {isExternal && <Icon icon={externalIcon} color="textIcon" size={16} />}
      </Root>
    );
  },
);

export const Link = createPolymorphicComponent<t.LinkDef>(_Link);

const styles = createStyle(Components.Link, {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '$2',
    textDecoration: 'none',
    fontWeight: '$normal',

    '&:hover': {
      textDecoration: 'underline',
    },

    '&.focused': {
      outline: '2px solid $brand',
      outlineOffset: '1px',
      borderRadius: '$default',
    },
  },
});
