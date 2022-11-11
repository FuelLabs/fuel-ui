import { Box } from '../Box';

import { skeletonStyles } from './styles';

import { createComponent } from '~/utils';

export const SkeletonWrapper = createComponent(({ css, children }) => {
  return (
    <Box
      css={{
        ...skeletonStyles.wrapper,
        ...css,
      }}
    >
      {children}
      <Box css={skeletonStyles.skeleton} />
    </Box>
  );
});
