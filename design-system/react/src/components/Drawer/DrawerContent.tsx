/* eslint-disable @typescript-eslint/no-explicit-any */
import { mergeProps, mergeRefs } from '@react-aria/utils';
import type { AnimationProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { FocusScope, usePreventScroll, useDialog, useModal } from 'react-aria';
import { useStyles } from '~/hooks';
import { useClickAway } from '~/hooks/useClickAway';
import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '~/utils';
import { Components } from '~/utils/components-list';

import { Box } from '..';

import { useDrawer } from './Drawer';
import type { DrawerContentDef } from './defs';
import { getSize, styles } from './styles';

const MotionBox = motion<any>(Box);
const SPRING: AnimationProps['transition'] = {
  ease: 'linear',
  duration: '0.1',
};

const _DrawerContent = _unstable_createComponent<DrawerContentDef>(
  Components.DrawerContent,
  ({
    as = 'section',
    ref: innerRef,
    transition = SPRING,
    children,
    ...props
  }) => {
    const {
      ref,
      state,
      side,
      size,
      underlayProps,
      overlayProps,
      shouldCloseOnClickAway,
    } = useDrawer();

    const finalRef = mergeRefs(innerRef, ref) as any;
    const { dialogProps } = useDialog({ role: 'dialog' }, finalRef);
    const { modalProps } = useModal();
    const finalProps = mergeProps(props, overlayProps, dialogProps, modalProps);
    const classes = useStyles(styles, { ...props, side }, [
      'content',
      'underlay',
    ]);

    usePreventScroll();
    useClickAway(finalRef, () => {
      if (shouldCloseOnClickAway) {
        state?.toggle();
      }
    });

    return _unstable_createEl(
      as,
      { ...underlayProps, ...classes.underlay },
      <FocusScope contain restoreFocus autoFocus>
        <MotionBox
          {...finalProps}
          as={as}
          ref={mergeRefs(innerRef as any, ref)}
          className={classes.content.className}
          animate={{ x: 0 }}
          initial={{ x: side === 'right' ? '100%' : '-100%' }}
          exit={{ x: side === 'right' ? '100%' : '-100%' }}
          transition={transition}
          css={{ ...props.css, ...getSize(size) }}
        >
          {children}
        </MotionBox>
      </FocusScope>,
    );
  },
);

export const DrawerContent =
  createPolymorphicComponent<DrawerContentDef>(_DrawerContent);

DrawerContent.id = 'DrawerContent';
