import { useFuelTheme, useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';
import { Icon } from '../Icon';

import type { NavThemeToggleDef } from './defs';
import { styles } from './styles';

export const NavThemeToggle = _unstable_createComponent<NavThemeToggleDef>(
  Components.NavThemeToggle,
  (props) => {
    const { current, setTheme } = useFuelTheme();
    const classes = useStyles(styles, props, ['themeToggle']);
    const Root = 'span';

    const handleChange = async () => {
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    };

    return (
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
  },
);

NavThemeToggle.id = 'NavThemeToggle';
