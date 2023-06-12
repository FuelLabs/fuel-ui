/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, Children } from 'react';
import { OverlayContainer, useOverlay } from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';

import { _unstable_createComponent } from '../../utils';

import { DrawerBody } from './DrawerBody';
import { DrawerClose } from './DrawerClose';
import { DrawerContent } from './DrawerContent';
import { DrawerTrigger } from './DrawerTrigger';
import { DrawerCtx, type DrawerDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

export const Drawer = _unstable_createComponent<DrawerDef>(
  Components.Drawer,
  ({
    side = 'right',
    size = 'sm',
    shouldCloseOnClickAway = true,
    containerRef,
    children,
    ...opts
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [container, setContainer] = useState<HTMLElement | null>(null);
    const state = useOverlayTriggerState({
      ...opts,
      onOpenChange: (isOpen) => {
        if (!isOpen) opts.onClose?.();
      },
    });
    const { overlayProps, underlayProps } = useOverlay(
      {
        ...opts,
        isOpen: state.isOpen,
        onClose: () => {
          opts.onClose?.();
          state.close();
        },
      },
      ref
    );

    const ctxProps = {
      ref,
      side,
      size,
      state,
      overlayProps,
      underlayProps,
      shouldCloseOnClickAway,
    };

    const classes = useStyles(styles, ctxProps);

    const customChildren = Children.toArray(children).map((child: any) => {
      if (child?.type.id === 'DrawerContent') {
        return (
          <OverlayContainer
            key={child?.type.id}
            {...(container && { portalContainer: container })}
            className={classes.overlay.className}
            data-state={state.isOpen ? 'open' : ''}
          >
            <AnimatePresence key={child.type.id}>
              {state.isOpen && <>{child}</>}
            </AnimatePresence>
          </OverlayContainer>
        );
      }
      return child;
    });

    useEffect(() => {
      if (containerRef?.current) {
        setContainer(containerRef.current);
      }
    }, [containerRef?.current]);

    return (
      <DrawerCtx.Provider value={ctxProps}>{customChildren}</DrawerCtx.Provider>
    );
  }
);

Drawer.Body = DrawerBody;
Drawer.CloseButton = DrawerClose;
Drawer.Content = DrawerContent;
Drawer.Trigger = DrawerTrigger;
