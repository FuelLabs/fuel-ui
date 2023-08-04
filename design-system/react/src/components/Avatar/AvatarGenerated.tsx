import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type { AvatarGeneratedDef } from './defs';
import { useAvatarGenerated } from './hooks/useAvatarGenerated';
import { styles } from './styles';

const _AvatarGenerated = _unstable_createComponent<AvatarGeneratedDef>(
  Components.AvatarGenerated,
  ({ as = 'div', size = 'md', css, ...props }) => {
    const { background, totalSize } = useAvatarGenerated({ ...props, size });
    const classes = useStyles(
      styles,
      { css: { ...css, width: totalSize, height: totalSize, background } },
      ['generated'],
    );
    return _unstable_createEl(as, {
      ...props,
      ...classes.generated,
    });
  },
);

export const AvatarGenerated =
  createPolymorphicComponent<AvatarGeneratedDef>(_AvatarGenerated);
