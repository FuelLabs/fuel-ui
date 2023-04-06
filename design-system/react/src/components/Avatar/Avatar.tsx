import * as RAvatar from '@radix-ui/react-avatar';
import { createElement } from 'react';

import { createComponent2 } from '../../utils';

import { AvatarGenerated } from './AvatarGenerated';
import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

export const Avatar = createComponent2<t.AvatarDef>(
  Components.Avatar,
  ({ name, size = 'md', css, ...props }) => {
    const classes = useStyles(styles, { ...props, size });
    const imageProps = useElementProps(props, classes.image);
    const children = (
      <>
        <RAvatar.AvatarImage {...imageProps} alt={props.alt || name} />
        <RAvatar.AvatarFallback className={classes.fallback.className}>
          {name
            .split(' ')
            .map((w) => w.slice(0, 1))
            .join('')}
        </RAvatar.AvatarFallback>
      </>
    );
    const wrapperProps = useElementProps(classes.root, { css });
    return createElement(RAvatar.Root, wrapperProps, children);
  }
);

Avatar.Generated = AvatarGenerated;
