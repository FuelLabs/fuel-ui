/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

import { Flex } from '../Box/Flex';
import { Stack } from '../Box/Stack';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import type { PopoverProps } from '../Popover';
import { Popover } from '../Popover';
import { Text } from '../Text';

import { StrengthIndicator } from './StrengthIndicator';
import type { PasswordDictionary } from './constants';
import { usePasswordStrength } from './hooks';
import { styles } from './styles';

import { createComponent } from '~/utils';

export type PasswordStrengthProps = {
  password: string;
  minLength?: number;
  onChangeStrength?: (strength: keyof typeof PasswordDictionary) => void;
} & Omit<PopoverProps, 'content'>;

type ObjProps = {
  Indicator: typeof StrengthIndicator;
};

export const PasswordStrength = createComponent<
  PasswordStrengthProps,
  ObjProps
>(({ password, children, minLength = 6, onChangeStrength, ...props }) => {
  const {
    strength,
    label,
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
          {label}
        </Heading>
        <StrengthIndicator strength={strength} />
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
});

PasswordStrength.Indicator = StrengthIndicator;

PasswordStrength.defaultProps = {
  minLength: 6,
};
