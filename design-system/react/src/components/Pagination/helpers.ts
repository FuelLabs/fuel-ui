export const SEPARATORS = {
  ELLIPSIS: -1,
};

/**
 * Checks if a number is a range of numbers.
 * @param x The number to check.
 * @param nums The range of numbers.
 * @returns `true` if the number is in the range, `false` otherwise.
 * @example
 * isBetween(1, [1, 2, 3]) // true
 * isBetween(4, [1, 2, 3]) // false
 */
function isBetween(x: number, nums: number[]) {
  return nums.some((num) => x === num);
}

export type GeneratePagesOpts = {
  pagesCount: number;
  currentPage: number;
  numberOfSiblings: number;
};

/**
 * Generates an array of pages based on the current page and the total number of pages.
 * @param pagesCount The total number of pages.
 * @param currentPage The current page.
 * @param numberOfSiblings The number of pages to show on each side of the current page.
 * @returns An array of pages.
 * @example
 * generatePages(10, 1, 2) // [1, 2, 3, -1, 10]
 * generatePages(10, 5, 2) // [1, -1, 4, 5, 6, -1, 10]
 * generatePages(10, 10, 2) // [1, -1, 8, 9, 10]
 */
export function generatePages(opts: GeneratePagesOpts) {
  const { pagesCount, currentPage, numberOfSiblings } = opts;
  const pages = [...Array(pagesCount)].map((_, i) => i + 1);
  const head = pages.slice(0, numberOfSiblings + 1);
  const tail = pages.slice(-numberOfSiblings - 1);

  if (isBetween(currentPage, head)) {
    return [
      ...pages.slice(0, numberOfSiblings + 1),
      SEPARATORS.ELLIPSIS,
      pagesCount,
    ];
  }
  if (isBetween(currentPage, tail)) {
    return [
      1,
      SEPARATORS.ELLIPSIS,
      ...pages.slice(pagesCount - numberOfSiblings - 1),
    ];
  }
  return [
    1,
    SEPARATORS.ELLIPSIS,
    ...pages.slice(currentPage - 2, currentPage + 1),
    SEPARATORS.ELLIPSIS,
    pagesCount,
  ];
}
