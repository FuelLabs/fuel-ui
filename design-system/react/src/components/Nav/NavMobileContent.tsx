/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
import { Children } from 'react';
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';
import { Box } from '../Box';
import { IconButton } from '../IconButton';

import { useNavMobileProps } from './NavMobile';
import type { NavMobileContentDef } from './defs';
import { styles } from './styles';

export const NavMobileContent = _unstable_createComponent<NavMobileContentDef>(
  Components.NavMobileContent,
  (props) => {
    const classes = useStyles(styles, props, ['mobileContent']);
    const { isOpen, onOpenChange } = useNavMobileProps();
    const arr = Children.toArray(props.children);
    const logo = arr.find((child) => (child as any)?.type?.id === 'NavLogo');
    const childWithoutLogo = arr.filter((child) => {
      const id = (child as any)?.type?.id;
      return id !== 'NavLogo';
    });

    return (
      <Box as="header" {...props} {...classes.mobileContent} data-open={isOpen}>
        {logo}
        <AnimatePresence initial={false}>{childWithoutLogo}</AnimatePresence>
        <IconButton
          variant="link"
          aria-label="Toggle mobile menu"
          icon={isOpen ? 'X' : 'Menu2'}
          iconSize={24}
          onPress={() => onOpenChange((s) => !s)}
          css={{ ml: '$4' }}
        />
      </Box>
    );
  },
);

NavMobileContent.id = 'NavMobileContent';
