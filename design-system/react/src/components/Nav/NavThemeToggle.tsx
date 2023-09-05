import { motion } from 'framer-motion';
import { useFuelTheme, useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';
import { Icon } from '../Icon';

import { useNavMobileProps } from './NavMobile';
import type { NavThemeToggleDef } from './defs';
import { styles } from './styles';

export const NavThemeToggle = _unstable_createComponent<NavThemeToggleDef>(
  Components.NavThemeToggle,
  ({ whenOpened = 'hide', ...props }) => {
    const { current, setTheme } = useFuelTheme();
    const mobileProps = useNavMobileProps();
    const classes = useStyles(styles, props, ['themeToggle']);
    const Root = 'span';

    const handleChange = async () => {
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    };

    const content = (
      <Root
        {...props}
        {...classes.themeToggle}
        role="button"
        data-theme={current}
        onClick={handleChange}
      >
        <Icon icon="Sun" size={18} />
        <Icon icon="MoonStars" size={18} />
      </Root>
    );

    if (!mobileProps?.onOpenChange || whenOpened === 'no-effect') {
      return content;
    }

    const animContent = (
      <motion.div
        key="actions"
        initial="collapsed"
        animate="open"
        exit="collapsed"
        transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
        variants={{
          open: { opacity: 1, width: 'auto' },
          collapsed: { opacity: 0, width: 0 },
        }}
      >
        {content}
      </motion.div>
    );

    return (
      <>
        {!mobileProps.isOpen && whenOpened === 'hide' && animContent}
        {mobileProps.isOpen && whenOpened === 'show' && animContent}
      </>
    );
  },
);

NavThemeToggle.id = 'NavThemeToggle';
