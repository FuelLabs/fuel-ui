import type { LayerVariant } from '@fuel-ui/css';
import { cx } from '@fuel-ui/css';
import type { ReactNode } from 'react';
import { Children } from 'react';

import { createComponent } from '../../utils';
import type { HTMLProps } from '../../utils';
import { Box } from '../Box';
import { SPINNER_SIZE, createIcon } from '../Button';
import type { ButtonCustomProps } from '../Button/defs';
import { Spinner } from '../Spinner';

import { TagCloseButton } from './TagCloseButton';
import * as styles from './styles';

function getIconSize(size: TagProps['size'], iconSize?: number) {
  if (iconSize) return iconSize;
  if (size === 'xs') return 14;
  return 16;
}

type GetChildrenParams = TagProps & {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};
function getChildren({
  isLoading,
  size,
  children,
  iconLeft,
  iconRight,
}: GetChildrenParams) {
  if (isLoading) {
    return (
      <>
        <Spinner color="current" size={SPINNER_SIZE[size || 'md']} />
        {children}
      </>
    );
  }

  const hasCloseBtn = Children.toArray(children).some(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (child: any) => child.type?.id?.includes('TagCloseButton'),
  );
  return (
    <>
      {iconLeft}
      {children}
      {!hasCloseBtn && iconRight}
    </>
  );
}

export type TagSizes = 'xs' | 'sm' | 'md';

export type TagProps = HTMLProps['div'] &
  Omit<ButtonCustomProps, 'iconAriaLabel'> & {
    size?: TagSizes;
    variant?: LayerVariant;
  };

type ObjProps = {
  CloseButton: typeof TagCloseButton;
};

export const Tag = createComponent<TagProps, ObjProps>(
  ({
    as = 'span',
    size = 'sm',
    intent = 'primary',
    variant = 'solid',
    iconSize: initialIconSize,
    leftIcon,
    rightIcon,
    leftIconAriaLabel,
    rightIconAriaLabel,
    isLoading,
    isDisabled,
    children,
    className,
    ...props
  }) => {
    const disabled = isLoading || isDisabled;
    const iconSize = getIconSize(size, initialIconSize);
    const iconLeft = createIcon(leftIcon, leftIconAriaLabel, iconSize);
    const iconRight = createIcon(rightIcon, rightIconAriaLabel, iconSize);

    const classes = cx(
      'fuel_Tag',
      className,
      styles.tag({
        size,
        variant,
        disabled,
        intent,
      }),
    );

    const customChildren = getChildren({
      isLoading,
      size,
      iconLeft,
      iconRight,
      children,
    });

    const customProps = {
      ...props,
      'aria-disabled': disabled,
    };

    return (
      <Box as={as} {...customProps} className={classes}>
        {customChildren}
      </Box>
    );
  },
);

Tag.CloseButton = TagCloseButton;
