import _cx from 'classnames';

export function cx(...args: Parameters<typeof _cx>) {
  const result = _cx(...args);
  return Array.from(new Set(result.split(' '))).join(' ');
}
