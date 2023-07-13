export const ELLIPSE = -1;

/**
 * Checks if a number is between two numbers.
 * @param x The number to check.
 * @param nums The numbers to check against.
 * @returns A boolean.
 * @example
 * isBetween(2, [1, 3]) // true
 * isBetween(4, [1, 3]) // false
 */
export function isBetween(x: number, nums: number[]) {
  const length = nums[1] - nums[0] + 1;
  const list = [...Array(length)].map((_, i) => i + nums[0]);
  return list.some((num) => x === num);
}

const END_OFFSET = 2;

export type GeneratePagesOpts = {
  pagesCount: number;
  currentPage: number;
  pagesToDisplay?: number;
};

/**
 * Gets the middle slice of pages.
 * @param pages The array of pages.
 * @param opts The options.
 * @returns The middle slice of pages.
 * @example
 * getMiddleSlice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], { pagesCount: 10, currentPage: 5, pagesToDisplay: 5 }) // [3, 4, 5, 6, 7]
 */
function getMiddleSlice(pages: number[], opts: GeneratePagesOpts) {
  const { pagesCount, currentPage, pagesToDisplay = 5 } = opts;
  let middleSlice: number[] = [];
  const middleNums = pagesToDisplay - END_OFFSET * END_OFFSET;
  const currentPageIdx = pages.indexOf(currentPage);

  if (
    pagesToDisplay === 6 &&
    currentPage >= 4 &&
    currentPage < pagesCount - 3
  ) {
    middleSlice = [...pages.slice(currentPageIdx, currentPageIdx + 2)];
    return middleSlice;
  }

  if (
    pagesToDisplay !== 6 &&
    currentPage > END_OFFSET &&
    currentPage < pagesCount - END_OFFSET
  ) {
    middleSlice = [
      ...pages.slice(currentPageIdx - 1, currentPageIdx + middleNums - 1),
    ];
  }

  if (middleSlice[middleSlice.length - 2] >= pagesCount - 1) {
    return [];
  }

  return middleSlice;
}

/**
 * Generates an array of pages based on the current page and the total number of pages.
 * @param pagesCount The total number of pages.
 * @param currentPage The current page.
 * @param toDisplay The total number of pages to display.
 * @returns An array of pages.
 */
export function generatePages(opts: GeneratePagesOpts) {
  const {
    pagesCount,
    currentPage,
    pagesToDisplay: initialPagesToDisplay = 5,
  } = opts;
  const pages = [...Array(pagesCount)].map((_, i) => i + 1);
  let pagesToDisplay = initialPagesToDisplay;

  if (pagesToDisplay < 6) {
    throw new Error('pagesToDisplay must be greater than 5');
  }
  if (pagesToDisplay > pagesCount) {
    pagesToDisplay = pagesCount;
  }
  if (pagesCount === pagesToDisplay) {
    return pages;
  }

  const head = pages.slice(0, pagesToDisplay - END_OFFSET);
  const tail = pages.slice(-(pagesToDisplay - END_OFFSET));
  const middleSlice = getMiddleSlice(pages, opts);
  const isBetweenFirsts = currentPage < Math.ceil(pagesCount / 2);

  if (middleSlice.some((num) => num === currentPage)) {
    return [1, ELLIPSE, ...middleSlice, ELLIPSE - 1, pagesCount];
  }
  if (!isBetweenFirsts) {
    return [1, ELLIPSE, ...tail];
  }
  return [...head, ELLIPSE, pagesCount];
}
