/* eslint-disable @typescript-eslint/no-explicit-any */
import { mergeProps, mergeRefs } from '@react-aria/utils';
import type { AnimationProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { FocusScope, usePreventScroll, useDialog, useModal } from 'react-aria';
import { useClickAway } from 'react-use';

import { Box } from '..';

import type { DrawerContentDef } from './defs';
import { useDrawer } from './defs';
import { getSize, styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

const MotionBox = motion<any>(Box);
const SPRING: AnimationProps['transition'] = {
  ease: 'linear',
  duration: '0.1',
};

export const DrawerContent = _unstable_createComponent<DrawerContentDef>(
  Components.DrawerContent,
  ({ ref: innerRef, transition = SPRING, children, ...props }) => {
    const {
      ref,
      state,
      side,
      size,
      underlayProps,
      overlayProps,
      shouldCloseOnClickAway,
    } = useDrawer();

    const { dialogProps } = useDialog({ role: 'dialog' }, ref);
    const { modalProps } = useModal();
    const finalProps = mergeProps(props, overlayProps, dialogProps, modalProps);

    const classes = useStyles(styles, { ...props, side });

    usePreventScroll();
    useClickAway(ref, () => {
      if (shouldCloseOnClickAway) {
        state?.toggle();
      }
    });

    return (
      <Box {...(underlayProps as any)} className={classes.underlay.className}>
        <FocusScope contain restoreFocus autoFocus>
          <MotionBox
            {...finalProps}
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
        </FocusScope>
      </Box>
    );
  }
);

DrawerContent.id = 'DrawerContent';
