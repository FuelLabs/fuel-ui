import { motion } from 'framer-motion';
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { AvatarGenerated } from '../Avatar/AvatarGenerated';
import { Box } from '../Box';
import { Button } from '../Button';
import { Tag } from '../Tag';

import { useNavProps } from './Nav';
import { useNavMobileProps } from './NavMobile';
import type { NavConnectionDef } from './defs';
import { styles } from './styles';

const MotionStack = motion(Box.Stack);

const _NavConnection = _unstable_createComponent<NavConnectionDef>(
  Components.NavConnection,
  ({ whenOpened = 'show', ...props }) => {
    const navProps = useNavProps();
    const mobileProps = useNavMobileProps();
    const classes = useStyles(styles, props);
    const hasProps = navProps.network || navProps.account;
    const connectButton = (
      <Button
        size="sm"
        variant="solid"
        intent="primary"
        leftIcon="Wallet"
        onPress={navProps.onConnect}
      >
        Connect
      </Button>
    );
    const content = (
      <>
        {navProps.network && (
          <Tag
            {...classes.network}
            size="md"
            variant="outlined"
            intent="base"
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
      </>
    );

    if (!mobileProps?.onOpenChange && !hasProps) {
      return connectButton;
    }
    if (!mobileProps?.onOpenChange || whenOpened === 'no-effect') {
      return (
        <Box.Stack gap="$4" direction="row">
          {content}
        </Box.Stack>
      );
    }

    const animContent = (
      <MotionStack
        {...classes.connection}
        direction="row"
        initial="collapsed"
        animate="open"
        exit="collapsed"
        transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
        variants={{
          open: { opacity: 1, x: '0' },
          collapsed: { opacity: 0, x: 100 },
        }}
      >
        {content}
      </MotionStack>
    );

    return (
      <>
        {!mobileProps.isOpen && whenOpened === 'hide' && animContent}
        {mobileProps.isOpen && whenOpened === 'show' && animContent}
      </>
    );
  },
);

export const NavConnection =
  createPolymorphicComponent<NavConnectionDef>(_NavConnection);

NavConnection.id = 'NavConnection';
