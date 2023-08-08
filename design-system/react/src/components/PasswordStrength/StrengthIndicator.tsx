import { createComponent } from '~/utils';

import type { PasswordStrength } from '../../utils/types';
import { Box } from '../Box';

import { styles } from './styles';

export type StrengthIndicatorIndicatorProps = {
  strength: PasswordStrength;
};

export const StrengthIndicator =
  createComponent<StrengthIndicatorIndicatorProps>(({ strength, ...props }) => (
    <Box css={styles.strengthIndicatorContainer} {...props}>
      <Box data-strength={strength} css={styles.strengthIndicator} />
      <Box
        data-strength={
          strength !== 'average' && strength !== 'strong' ? 0 : strength
        }
        css={styles.strengthIndicator}
      />
      <Box
        data-strength={strength === 'strong' ? strength : ''}
        css={styles.strengthIndicator}
      />
    </Box>
  ));
