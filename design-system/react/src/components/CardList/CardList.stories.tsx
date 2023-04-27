import { Avatar } from '../Avatar';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';

import type { CardListProps } from './CardList';
import { CardList } from './CardList';

export default {
  component: CardList,
  title: 'UI/CardList',
  argTypes: {},
};

const cardItem = (
  <CardList.Item>
    <Avatar
      size="sm"
      name="Colm Tuite"
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
    />
    <Heading as="h6" css={{ margin: 0 }}>
      Colm Tuite
    </Heading>
  </CardList.Item>
);

export const Usage = (args: CardListProps) => (
  <CardList {...args} css={{ maxW: '$md' }}>
    {cardItem}
    {cardItem}
  </CardList>
);

export const Active = (args: CardListProps) => (
  <CardList {...args} css={{ maxW: '$md' }}>
    <CardList.Item isActive>
      <Avatar
        {...args}
        size="sm"
        name="Colm Tuite"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />
      <Heading as="h6" css={{ margin: 0 }}>
        Colm Tuite
      </Heading>
    </CardList.Item>
  </CardList>
);

export const Clickable = (args: CardListProps) => (
  <CardList {...args} css={{ maxW: '$md' }} isClickable>
    {cardItem}
    {cardItem}
  </CardList>
);

export const WithAction = (args: CardListProps) => (
  <CardList {...args} css={{ maxW: '$md' }}>
    <CardList.Item
      rightEl={
        <IconButton
          size="xs"
          variant="link"
          intent="base"
          icon={<Icon icon="DotsThreeOutline" color="gray8" />}
          aria-label="Action"
          css={{ px: '$0', color: '$intentsBase10' }}
        />
      }
    >
      <Avatar
        {...args}
        size="sm"
        name="Colm Tuite"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />
      <Heading as="h6" css={{ margin: 0 }}>
        Colm Tuite
      </Heading>
    </CardList.Item>
  </CardList>
);
