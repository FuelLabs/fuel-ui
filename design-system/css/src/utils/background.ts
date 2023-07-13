import { composeUtil } from '../helpers/composeUtil';

export const bg = composeUtil(['backgroundColor']);

export const linearGradient = (value: string) => ({
  backgroundImage: `linear-gradient(${value})`,
});
