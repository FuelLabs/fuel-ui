import { Skeleton } from '.';

export default {
  component: Skeleton,
  title: 'UI/Skeleton',
};

export const Usage = () => (
  <Skeleton.Wrapper>
    <Skeleton.Line />
  </Skeleton.Wrapper>
);
