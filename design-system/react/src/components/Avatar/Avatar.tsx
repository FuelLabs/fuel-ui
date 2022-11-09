import { cx } from '@fuel-ui/css';
import * as RAvatar from '@radix-ui/react-avatar';

import { createComponent, createStyledElement } from '../../utils';

import { AvatarGenerated } from './AvatarGenerated';
import * as styles from './styles';

type OmitProps = 'children';
export type AvatarProps = RAvatar.AvatarImageProps & {
  name: string;
  fallback?: string;
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

type ObjProps = {
  Generated: typeof AvatarGenerated;
};

export const Avatar = createComponent<AvatarProps, ObjProps, OmitProps>(
  ({ name, size, className, css, as, ...props }) => {
    const classes = cx('fuel_avatar', className);
    const wrapperProps = { as, css, className: classes };
    const children = (
      <>
        <RAvatar.AvatarImage
          {...props}
          alt={props.alt || name}
          className={styles.image()}
        />
        <RAvatar.AvatarFallback className={styles.fallback()}>
          {name
            .split(' ')
            .map((w) => w.slice(0, 1))
            .join('')}
        </RAvatar.AvatarFallback>
      </>
    );

    return createStyledElement(
      RAvatar.Root,
      styles.avatar,
      { size },
      wrapperProps,
      children
    );
  }
);

Avatar.Generated = AvatarGenerated;
