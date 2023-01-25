import { generatePages, SEPARATORS } from './helpers';

describe('generatePages', () => {
  it('should return right value if current page is first', () => {
    const res = generatePages({
      pagesCount: 10,
      currentPage: 1,
      numberOfSiblings: 2,
    });
    expect(res).toEqual([1, 2, 3, SEPARATORS.ELLIPSIS, 10]);
  });

  it('should return right value if current page is in the last ones', () => {
    const res = generatePages({
      pagesCount: 10,
      currentPage: 8,
      numberOfSiblings: 2,
    });
    expect(res).toEqual([1, SEPARATORS.ELLIPSIS, 8, 9, 10]);
  });

  it('should return right value if current page is in the middle', () => {
    const res = generatePages({
      pagesCount: 10,
      currentPage: 5,
      numberOfSiblings: 2,
    });
    expect(res).toEqual([
      1,
      SEPARATORS.ELLIPSIS,
      4,
      5,
      6,
      SEPARATORS.ELLIPSIS,
      10,
    ]);
  });
});
