import type { ReactNode } from 'react';
import { Children } from 'react';

export function useStrictedChildren(
  name: string,
  list: string[],
  children: ReactNode | ReactNode[],
) {
  const count = Children.count(children);
  const items = Children.toArray(children);
  const head = [...list].slice(0, list.length - 1);
  const last = list[list.length - 1];

  if (count === 0) {
    throw new Error(
      `${name} must have at least one child of type ${head.join(
        ', ',
      )} or ${last}`,
    );
  }
  return items.filter((child) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const id = (child as any)?.type?.id;
    if (!list.includes(id)) {
      throw new Error(
        `${name} only accepts ${head.join(', ')} or ${last} as children`,
      );
    }
    return child;
  });
}
