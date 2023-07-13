import { createElement } from 'react';
import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';
import { useAvatarGenerated } from './hooks/useAvatarGenerated';
import { styles } from './styles';

const _AvatarGenerated = _unstable_createComponent<t.AvatarGeneratedDef>(
  Components.AvatarGenerated,
  ({ as = 'div', size = 'md', css, ...props }) => {
    const { background, totalSize } = useAvatarGenerated({ ...props, size });
    const classes = useStyles(
      styles,
      { css: { ...css, width: totalSize, height: totalSize, background } },
      ['generated'],
    );
    const elementProps = useElementProps(props, classes.generated, {
      alt: props.alt || 'Fuel Generated Avatar',
    });
    return createElement(as, elementProps);
  },
);

export const AvatarGenerated =
  createPolymorphicComponent<t.AvatarGeneratedDef>(_AvatarGenerated);
