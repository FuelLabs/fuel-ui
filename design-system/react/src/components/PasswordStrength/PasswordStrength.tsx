import { useMemo } from 'react';

import { Box } from '../Box';
import { Heading } from '../Heading';
import type { PopoverProps } from '../Popover';
import { Popover } from '../Popover';
import { Text } from '../Text';

import { PasswordDictionary } from './constants';
import { passwordStrengthStyles } from './styles';
import { passwordStrengthCalculator } from './utils';

import { createComponent } from '~/utils';

type PasswordStrengthProps = {
  password: string;
} & Omit<PopoverProps, 'content'>;

export const PasswordStrength = createComponent<PasswordStrengthProps>(
  ({ password, children, ...props }) => {
    const popoverContent = useMemo(() => {
      const strength = passwordStrengthCalculator(password);
      return (
        <Box css={{ maxW: '211px' }}>
          r
          <Heading as="h5" css={{ m: '$0', mb: '$2' }}>
            {PasswordDictionary[strength]}
          </Heading>
          <Box css={passwordStrengthStyles.strengthIndicatorContainer}>
            <Box css={passwordStrengthStyles.strengthIndicator(strength)} />
            <Box
              css={
                strength !== 'average'
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
          <Text fontSize="base">
            <strong>It&apos;s better to have</strong> <i>(not required):</i>
          </Text>
        </Box>
      );
    }, [password]);
    return (
      <Popover {...props} content={popoverContent}>
        {children}
      </Popover>
    );
  }
);
