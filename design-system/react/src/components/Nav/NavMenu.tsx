import { cx } from '@fuel-ui/css';
import { AnimatePresence, motion } from 'framer-motion';
import { useFlexProps, useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import { useNavMobileProps } from './NavMobile';
import type { NavMenuDef } from './defs';
import { styles } from './styles';

const _NavMenu = _unstable_createComponent<NavMenuDef>(
  Components.NavMenu,
  ({ as: Root = 'div', css, ...props }) => {
    const mobileProps = useNavMobileProps();
    const classes = useStyles(styles, props, ['menu']);
    const flexClasses = useFlexProps(props, css);
    const className = cx(flexClasses.stack.className, classes.menu.className);
    const content = <Root {...props} className={className} />;

    if (!mobileProps?.onOpenChange) {
      return content;
    }

    return (
      <AnimatePresence>
        {mobileProps.isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                height: 'auto',
                opacity: 1,
                transition: {
                  height: { duration: 0.2, easings: ['easeOut'] },
                  opacity: { delay: 0.2, duration: 0.2, easings: ['easeOut'] },
                },
              },
              collapsed: {
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.2, delay: 0.1, easings: ['easeOut'] },
                  opacity: { duration: 0.2, easings: ['easeOut'] },
                },
              },
            }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

export const NavMenu = createPolymorphicComponent<NavMenuDef>(_NavMenu);
NavMenu.id = 'NavMenu';
