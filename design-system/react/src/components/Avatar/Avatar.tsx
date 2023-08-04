import * as RAvatar from '@radix-ui/react-avatar';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';
import { Box } from '../Box';

import { AvatarGenerated } from './AvatarGenerated';
import type * as t from './defs';
import { styles } from './styles';

export const Avatar = _unstable_createComponent<t.AvatarDef>(
  Components.Avatar,
  ({ name, size = 'md', css, ...props }) => {
    const classes = useStyles(styles, { ...props, size });
    const imageEl = _unstable_createEl(RAvatar.AvatarImage, {
      ...props,
      ...classes.image,
      alt: props.alt || name,
    });

    const children = (
      <>
        {imageEl}
        <RAvatar.AvatarFallback className={classes.fallback.className}>
          {name
            .split(' ')
            .map((w) => w.slice(0, 1))
            .join('')}
        </RAvatar.AvatarFallback>
      </>
    );

    return (
      <Box as={RAvatar.Root} {...classes.root} css={css}>
        {children}
      </Box>
    );
  },
);

Avatar.Generated = AvatarGenerated;
