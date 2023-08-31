import { useFuelTheme, useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { AvatarGenerated } from '../Avatar/AvatarGenerated';
import { Box } from '../Box';
import { Tag } from '../Tag';

import { useNavProps } from './Nav';
import type { NavConnectionDef } from './defs';
import { styles } from './styles';

export const _NavConnection = _unstable_createComponent<NavConnectionDef>(
  Components.NavConnection,
  (props) => {
    const navProps = useNavProps();
    const { current, setTheme } = useFuelTheme();
    const classes = useStyles(styles, props);

    const handleChange = async () => {
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    };

    if (!navProps.network && !navProps.account) return null;
    return (
      <Box.Stack {...props} {...classes.connection}>
        {navProps.network && (
          <Tag
            {...classes.network}
            size="md"
            variant="outlined"
            intent="base"
            data-theme={current}
            onClick={handleChange}
            leftIcon={
              <Box
                css={{
                  width: 8,
                  height: 8,
                  borderRadius: '$full',
                  bg: '$brand',
                }}
              />
            }
          >
            {navProps.network.name}
          </Tag>
        )}
        {navProps.account && (
          <AvatarGenerated
            {...props}
            {...classes.avatar}
            hash={navProps.account}
            size="sm"
          />
        )}
      </Box.Stack>
    );
  },
);

export const NavConnection =
  createPolymorphicComponent<NavConnectionDef>(_NavConnection);

NavConnection.defaultProps = {
  direction: 'row',
};

NavConnection.id = 'NavConnection';
