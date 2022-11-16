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
import { passwordStrengthStyles } from './styles';
import { passwordChecker, passwordStrengthCalculator } from './utils';

import { createComponent } from '~/utils';

export type PasswordStrengthProps = {
  password: string;
} & Omit<PopoverProps, 'content'>;

export const PasswordStrength = createComponent<PasswordStrengthProps>(
  ({ password, children, ...props }) => {
    const strength = useMemo(
      () => passwordStrengthCalculator(password),
      [password]
    );
    const { lengthChecker, casingChecker, symbolsAndDigitsChecker } =
      passwordChecker(password);

    const popoverContent = (
      <>
        <Flex css={passwordStrengthStyles.popoverContainer}>
          <Heading as="h5" css={{ m: '$0' }}>
            {PasswordDictionary[strength]}
          </Heading>
          <Box css={passwordStrengthStyles.strengthIndicatorContainer}>
            <Box css={passwordStrengthStyles.strengthIndicator(strength)} />
            <Box
              css={
                strength !== 'average' && strength !== 'strong'
                  ? passwordStrengthStyles.strengthIndicatorBase
                  : passwordStrengthStyles.strengthIndicator(strength)
              }
            />
            <Box
              css={
                strength !== 'strong'
                  ? passwordStrengthStyles.strengthIndicatorBase
                  : passwordStrengthStyles.strengthIndicator(strength)
              }
            />
          </Box>
          <Text fontSize="xs" as="strong">
            <Text
              as="strong"
              fontSize="xs"
              css={passwordStrengthStyles.betterToHaveText}
            >
              It&apos;s better to have
            </Text>{' '}
            <i>(not required):</i>
          </Text>
          <Flex css={passwordStrengthStyles.popoverContainer}>
            <Flex gap="$1">
              <Icon
                color={lengthChecker ? 'mint9' : 'crimson9'}
                icon={lengthChecker ? <Check /> : <X />}
              />
              <Text fontSize="xs">Min. 6 characteres</Text>
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
        css={passwordStrengthStyles.popover}
        alignOffset={-30}
        {...props}
      >
        {children}
      </Popover>
    );
  }
);
