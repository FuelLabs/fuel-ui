/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx } from '@fuel-ui/css';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import type { AnimationProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { FocusScope, usePreventScroll, useDialog, useModal } from 'react-aria';
import { useClickAway } from 'react-use';

import type { BoxProps } from '..';
import { Box } from '..';

import { useDrawer } from '.';
import * as styles from './styles';

import { createComponent } from '~/utils';

const MotionBox = motion<any>(Box);
const SPRING: AnimationProps['transition'] = {
  ease: 'linear',
  duration: '0.1',
};

type DrawerContentProps = BoxProps & {
  transition?: AnimationProps['transition'];
};

type ObjProps = {
  id: string;
};

type OmitProps = 'as';
type ElementType = 'div';

export const DrawerContent = createComponent<
  DrawerContentProps,
  ObjProps,
  OmitProps,
  ElementType
>(({ ref: innerRef, transition = SPRING, children, className, ...props }) => {
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

  const contentClasses = cx('fuel_drawer-content', className, styles.content());
  const underlayClasses = cx(
    'fuel_drawer-underlay',
    className,
    styles.underlay({ side })
  );

  usePreventScroll();
  useClickAway(ref, () => {
    if (shouldCloseOnClickAway) {
      state?.toggle();
    }
  });

  return (
    <Box {...(underlayProps as any)} className={underlayClasses}>
      <FocusScope contain restoreFocus autoFocus>
        <MotionBox
          {...finalProps}
          ref={mergeRefs(innerRef as any, ref)}
          className={contentClasses}
          animate={{ x: 0 }}
          initial={{ x: side === 'right' ? '100%' : '-100%' }}
          exit={{ x: side === 'right' ? '100%' : '-100%' }}
          transition={transition}
          css={{ ...props.css, ...styles.getSize(size) }}
        >
          {children}
        </MotionBox>
      </FocusScope>
    </Box>
  );
});

DrawerContent.id = 'DrawerContent';
