/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

import { Box } from '../Box';
import { Flex } from '../Box/Flex';
import { Stack } from '../Box/Stack';
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
          <Text fontSize="xs" css={styles.rulesHeader}>
            A secure password should have:
          </Text>
          <Stack>
            <Text
              leftIcon={
                <Icon
                  data-error={lengthChecker}
                  icon={
                    lengthChecker ? (
                      <Icon icon={Icon.is('Check')} />
                    ) : (
                      <Icon icon={Icon.is('X')} />
                    )
                  }
                />
              }
              fontSize="xs"
            >
              Min. {minLength} characteres
            </Text>
            <Text
              leftIcon={
                <Icon
                  data-error={casingChecker}
                  icon={
                    casingChecker ? (
                      <Icon icon={Icon.is('Check')} />
                    ) : (
                      <Icon icon={Icon.is('X')} />
                    )
                  }
                />
              }
              fontSize="xs"
            >
              Upper & lower case letters
            </Text>
            <Text
              leftIcon={
                <Icon
                  data-error={symbolsAndDigitsChecker}
                  icon={
                    symbolsAndDigitsChecker ? (
                      <Icon icon={Icon.is('Check')} />
                    ) : (
                      <Icon icon={Icon.is('X')} />
                    )
                  }
                />
              }
              fontSize="xs"
            >
              Numbers & Symbols
            </Text>
            <Text
              leftIcon={
                <Icon
                  data-error={commonChecker}
                  icon={
                    commonChecker ? (
                      <Icon icon={Icon.is('Check')} />
                    ) : (
                      <Icon icon={Icon.is('X')} />
                    )
                  }
                />
              }
              fontSize="xs"
            >
              Not common or insecure
            </Text>
          </Stack>
        </Flex>
      </>
    );

    return (
      <Popover
        content={popoverContent}
        align="start"
        arrowProps={{
          offset: 0,
          width: 15,
          height: 5,
        }}
        css={styles.popover}
        alignOffset={-32}
        sideOffset={2}
        contentProps={{
          // this is needed to prevent the input from losing focus
          onOpenAutoFocus: (e: any) => e.preventDefault(),
          onCloseAutoFocus: (e: any) => e.preventDefault(),
        }}
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
