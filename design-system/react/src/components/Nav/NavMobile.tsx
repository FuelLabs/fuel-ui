import { createContext, useContext, useEffect, useState } from 'react';
import { useStyles } from '~/hooks';
import { useStrictedChildren } from '~/hooks/useStrictedChildren';
import { useWindowSize } from '~/hooks/useWindowSize';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type { NavMobileDef } from './defs';
import { styles } from './styles';

type ContextProps = {
  isOpen: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ctx = createContext<ContextProps>({} as any);
export function useNavMobileProps() {
  return useContext(ctx);
}

const CHILD_ITEMS = [
  'NavLogo',
  'NavMenu',
  'NavSpacer',
  'NavConnection',
  'NavThemeToggle',
  'NavMobileContent',
];

const _NavMobile = _unstable_createComponent<NavMobileDef>(
  Components.NavMobile,
  ({ as: Root = 'nav', isOpen, onOpenChange, ...props }) => {
    const { width } = useWindowSize();
    const [open, setOpen] = useState(() => Boolean(isOpen));
    const classes = useStyles(styles, props, ['mobile', 'wrapper']);
    const children = useStrictedChildren(
      'NavMobile',
      CHILD_ITEMS,
      props.children,
    );

    useEffect(() => {
      onOpenChange?.(Boolean(open));
    }, [open]);

    if (width >= 1024) return null;
    return (
      <ctx.Provider value={{ isOpen: open, onOpenChange: setOpen }}>
        <Root {...props} {...classes.mobile}>
          {children}
        </Root>
      </ctx.Provider>
    );
  },
);

export const NavMobile = createPolymorphicComponent<NavMobileDef>(_NavMobile);

NavMobile.id = 'NavMobile';
