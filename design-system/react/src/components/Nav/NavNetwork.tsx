import { useFuelTheme, useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';
import { Box } from '../Box';
import { Tag } from '../Tag';

import { useNavProps } from './Nav';
import type { NavNetworkDef } from './defs';
import { styles } from './styles';

export const NavNetwork = _unstable_createComponent<NavNetworkDef>(
  Components.NavNetwork,
  (props) => {
    const navProps = useNavProps();
    const { current, setTheme } = useFuelTheme();
    const classes = useStyles(styles, props, ['network']);

    const handleChange = async () => {
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    };

    if (!navProps.network) return null;
    return (
      <Tag
        {...props}
        {...classes.network}
        size="md"
        variant="outlined"
        intent="base"
        data-theme={current}
        onClick={handleChange}
        leftIcon={
          <Box
            css={{ width: 8, height: 8, borderRadius: '$full', bg: '$brand' }}
          />
        }
      >
        {navProps.network.name}
      </Tag>
    );
  },
);

NavNetwork.id = 'NavNetwork';
