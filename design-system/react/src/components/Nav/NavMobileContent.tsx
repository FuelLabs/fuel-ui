/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
import { Children, cloneElement } from 'react';
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
  ({ children, ...props }) => {
    const classes = useStyles(styles, props, ['mobileContent']);
    const { isOpen, onOpenChange } = useNavMobileProps();

    return (
      <Box as="header" {...props} {...classes.mobileContent} data-open={isOpen}>
        <AnimatePresence initial={false}>
          {Children.toArray(children).map((child: any) => {
            return cloneElement(child, { key: child.type.id });
          })}
        </AnimatePresence>
        <IconButton
          variant="link"
          aria-label="Toggle Menu"
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
