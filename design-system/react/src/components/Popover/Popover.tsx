import { cx, styled } from '@fuel-ui/css';
import * as RPopover from '@radix-ui/react-popover';
import type { ReactNode } from 'react';

import { createComponent } from '../../utils';
import { IconButton } from '../IconButton';

import * as styles from './styles';

export type PopoverProps = RPopover.PopoverProps & {
  content: ReactNode;
  side?: RPopover.PopperContentProps['side'];
  sideOffset?: RPopover.PopoverContentProps['sideOffset'];
  align?: RPopover.PopperContentProps['align'];
  alignOffset?: RPopover.PopoverContentProps['sideOffset'];
  showCloseButton?: boolean;
  className?: string;
  arrowProps?: RPopover.PopoverArrowProps;
  arrowClassName?: string;
  closeButtonClassName?: string;
  contentProps?: Omit<
    RPopover.PopoverContentProps,
    'sideOffset' | 'alignOffset'
  >;
};

const Content = styled(RPopover.Content);

export const Popover = createComponent<PopoverProps>(
  ({
    children,
    content,
    side = 'bottom',
    sideOffset = 5,
    align = 'center',
    alignOffset = 0,
    showCloseButton,
    className,
    arrowClassName,
    closeButtonClassName,
    arrowProps,
    contentProps,
    css,
    ...props
  }) => (
    <RPopover.Root {...props}>
      <RPopover.Trigger asChild>{children}</RPopover.Trigger>
      <Content
        css={css}
        className={cx(className, CLASSES.Content)}
        side={side}
        align={align}
        {...{ ...contentProps, sideOffset, alignOffset }}
      >
        <RPopover.Arrow
          offset={0}
          width={15}
          height={5}
          {...arrowProps}
          className={cx(arrowClassName, CLASSES.Arrow)}
        />
        {showCloseButton && (
          <RPopover.Close
            aria-label="Close"
            className={cx(closeButtonClassName, CLASSES.CloseButton)}
            asChild
          >
            <IconButton
              size="xs"
              aria-label="Close"
              icon="XCircle"
              intent="base"
              variant="link"
              css={{ padding: '$0' }}
            />
          </RPopover.Close>
        )}
        {content}
      </Content>
    </RPopover.Root>
  )
);

const CLASSES = {
  Content: cx('fuel_PopoverContent', styles.content()),
  Arrow: cx('fuel_PopoverArrow', styles.arrow()),
  CloseButton: cx('fuel_PopoverCloseBtn', styles.closeButton()),
};
