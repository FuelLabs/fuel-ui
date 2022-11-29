import { cssObj, cx } from '@fuel-ui/css';
import type { ReactNode } from 'react';

import { createComponent } from '../../utils';
import type { FlexProps } from '../Flex';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import type { IconButtonProps } from '../IconButton';
import { IconButton } from '../IconButton';

export type CopyableProps = Omit<FlexProps, 'children'> & {
  value: string;
  children?: ReactNode;
  tooltipMessage?: string;
  iconProps?: Partial<IconButtonProps>;
};

export const Copyable = createComponent<CopyableProps>(
  ({
    css,
    children,
    className,
    value,
    tooltipMessage = 'Click here to copy to clipboard',
    iconProps,
    ...props
  }) => {
    const classes = cx('fuel_copyable', className);
    const iconClass = cx('fuel_copyable-icon');

    async function handleCopy() {
      await navigator.clipboard.writeText(value);
    }

    return (
      <Flex
        align="center"
        gap="$2"
        {...props}
        className={classes}
        css={{ ...styles.root, ...css }}
      >
        {children}
        <IconButton
          color="gray"
          tooltip={tooltipMessage}
          onPress={handleCopy}
          variant="link"
          icon={<Icon icon="CopySimple" size={16} />}
          aria-label="Copy to clipboard"
          className={iconClass}
          css={styles.icon}
          {...iconProps}
        />
      </Flex>
    );
  }
);

const styles = {
  root: cssObj({
    display: 'inline-flex',
  }),
  icon: cssObj({
    py: '$3',
    px: '$0',
    height: '$4',
    color: '$gray8',
  }),
};
