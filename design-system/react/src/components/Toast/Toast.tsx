import { css, cx } from '@fuel-ui/css';
import type { ToasterProps } from 'react-hot-toast';
import toast, { ToastBar, Toaster as Root } from 'react-hot-toast';

import { createComponent } from '../../utils';
import { IconButton } from '../IconButton';

export type ToastProps = ToasterProps;

export const ToastProvider = createComponent<ToastProps>(
  ({ className, position = 'bottom-right', ...props }) => {
    const classes = cx('fuel_Toast', className, styles.root());
    return (
      <Root {...props} position={position}>
        {(t) => (
          <ToastBar toast={t} style={{ ...DEFAULT_STYLE, ...t.style }}>
            {({ icon, message }) => (
              <div
                className={classes}
                data-state={t.visible ? 'opened' : 'closed'}
              >
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <IconButton
                    autoFocus
                    size="xs"
                    aria-label="Close"
                    iconSize={22}
                    icon="SquareRoundedX"
                    intent="base"
                    variant="link"
                    className={styles.closeButton()}
                    onPress={() => toast.dismiss(t.id)}
                  />
                )}
              </div>
            )}
          </ToastBar>
        )}
      </Root>
    );
  }
);

export { toast };

const DEFAULT_STYLE = {
  padding: 0,
  boxShadow: 'none',
  borderRadius: '0',
  background: 'transparent',
};

const styles = {
  root: css({
    layer: 'layer-overlay',
    px: '$4',
    py: '$3',
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
    color: '$overlayText',

    '& div[role="status"]': {
      m: '0',
      display: '-webkit-box',
      maxWidth: 200,
      lineClamp: 6,
      WebkitLineClamp: 6,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    },

    '.fuel_Icon[aria-label="Icon SquareRoundedX"]': {
      color: '$overlayText',
    },
  }),
  closeButton: css({
    alignSelf: 'flex-start',
  }),
};
