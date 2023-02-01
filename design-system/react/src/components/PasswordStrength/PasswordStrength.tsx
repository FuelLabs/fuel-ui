import { Check, X } from 'phosphor-react';
import { useEffect } from 'react';

import { Box } from '../Box';
import { Flex } from '../Flex';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import type { PopoverProps } from '../Popover';
import { Popover } from '../Popover';
import { Text } from '../Text';

import { PasswordDictionary } from './constants';
import { usePasswordStrength } from './hooks';
import { styles } from './styles';

import { createComponent } from '~/utils';

export type PasswordStrengthProps = {
  password: string;
  minLength?: number;
  onChangeStrength?: (strength: keyof typeof PasswordDictionary) => void;
} & Omit<PopoverProps, 'content'>;

export const PasswordStrength = createComponent<PasswordStrengthProps>(
  ({ password, children, minLength = 6, onChangeStrength, ...props }) => {
    const {
      strength,
      checker: {
        casingChecker,
        lengthChecker,
        symbolsAndDigitsChecker,
        commonChecker,
      },
    } = usePasswordStrength({ password, minLength });

    useEffect(() => {
      onChangeStrength?.(strength);
    }, [strength, onChangeStrength]);

    const popoverContent = (
      <>
        <Flex css={styles.popoverContainer}>
          <Heading as="h5" css={styles.heading}>
            {PasswordDictionary[strength]}
          </Heading>
          <Box css={styles.strengthIndicatorContainer}>
            <Box css={styles.strengthIndicator(strength)} />
            <Box
              css={
                strength !== 'average' && strength !== 'strong'
                  ? styles.strengthIndicatorBase
                  : styles.strengthIndicator(strength)
              }
            />
            <Box
              css={
                strength !== 'strong'
                  ? styles.strengthIndicatorBase
                  : styles.strengthIndicator(strength)
              }
            />
          </Box>
          <Text fontSize="xs" as="strong" css={styles.rulesHeader}>
            A secure password should have:
          </Text>
          <Flex css={styles.popoverContainer}>
            <Flex gap="$1">
              <Icon
                color={lengthChecker ? 'mint9' : 'crimson9'}
                icon={lengthChecker ? <Check /> : <X />}
              />
              <Text fontSize="xs">Min. {minLength} characteres</Text>
            </Flex>
            <Flex gap="$1">
              <Icon
                color={casingChecker ? 'mint9' : 'crimson9'}
                icon={casingChecker ? <Check /> : <X />}
              />
              <Text fontSize="xs">Upper & lower case letters</Text>
            </Flex>
            <Flex gap="$1">
              <Icon
                color={symbolsAndDigitsChecker ? 'mint9' : 'crimson9'}
                icon={symbolsAndDigitsChecker ? <Check /> : <X />}
              />
              <Text fontSize="xs">Numbers & Symbols</Text>
            </Flex>
            <Flex gap="$1">
              <Icon
                color={commonChecker ? 'mint9' : 'crimson9'}
                icon={commonChecker ? <Check /> : <X />}
              />
              <Text fontSize="xs">Not common or insecure</Text>
            </Flex>
          </Flex>
        </Flex>
      </>
    );

    return (
      <Popover
        content={popoverContent}
        align="start"
        arrowProps={{
          offset: 31,
          width: 15,
          height: 5,
        }}
        css={styles.popover}
        alignOffset={-30}
        sideOffset={-2}
        {...props}
      >
        {children}
      </Popover>
    );
  }
);

PasswordStrength.defaultProps = {
  minLength: 6,
};
