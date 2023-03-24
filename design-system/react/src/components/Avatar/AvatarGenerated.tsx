/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import { createComponent2, createPolymorphicComponent } from '../../utils';

import { useAvatarGenerated } from './hooks/useAvatarGenerated';
import { styles } from './styles';
import type * as t from './types';

import { useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

const _AvatarGenerated = createComponent2<t.AvatarGeneratedDef>(
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
