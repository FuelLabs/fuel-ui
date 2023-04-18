/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';
import { useAvatarGenerated } from './hooks/useAvatarGenerated';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

const _AvatarGenerated = _unstable_createComponent<t.AvatarGeneratedDef>(
  Components.AvatarGenerated,
  ({ as = 'div', size = 'md', css, ...props }) => {
    const { svgString, totalSize } = useAvatarGenerated({ ...props, size });
    const classes = useStyles(
      styles,
      { css: { ...css, width: totalSize, height: totalSize } },
      ['generated']
    );
    const elementProps = useElementProps(props, classes.root, {
      dangerouslySetInnerHTML: {
        __html: svgString,
      },
    });

    return createElement(as, elementProps);
  }
);

export const AvatarGenerated =
  createPolymorphicComponent<t.AvatarGeneratedDef>(_AvatarGenerated);
