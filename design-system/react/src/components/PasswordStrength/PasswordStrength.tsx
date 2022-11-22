import { Check, X } from 'phosphor-react';
import { useMemo } from 'react';

import { Box } from '../Box';
import { Flex } from '../Flex';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import type { PopoverProps } from '../Popover';
import { Popover } from '../Popover';
import { Text } from '../Text';

import { PasswordDictionary } from './constants';
import { styles } from './styles';
import { passwordChecker, passwordStrengthCalculator } from './utils';

import { createComponent } from '~/utils';

export type PasswordStrengthProps = {
  password: string;
  minLength?: number;
} & Omit<PopoverProps, 'content'>;

export const PasswordStrength = createComponent<PasswordStrengthProps>(
  ({ password, children, minLength = 6, ...props }) => {
    const strength = useMemo(
      () => passwordStrengthCalculator(password, minLength),
      [password, minLength]
    );
    const { casingChecker, lengthChecker, symbolsAndDigitsChecker } = useMemo(
      () => passwordChecker(password, minLength),
      [password, minLength]
    );

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
          <Text fontSize="xs" as="strong">
            <Text as="strong" fontSize="xs" css={styles.betterToHaveText}>
              It&apos;s better to have
            </Text>{' '}
            <i>(not required):</i>
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
