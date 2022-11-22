export const getFirstItem = <T>(array: T[]): T => array[0];
export const getLastItem = <T>(array: T[]): T => array.slice(-1)[0];

type GeneratePagesOptions = {
  pagesCount: number;
  currentPage: number;
};

export function generatePages({
  pagesCount,
  currentPage,
}: GeneratePagesOptions) {
  if (!pagesCount) {
    return [];
  }

  const allPages = [...Array(pagesCount).keys()].map((page) => page + 1);

  if (allPages.length <= 3) {
    return allPages;
  }

  const lastPageNumber = getLastItem(allPages);
  const firstPage = getFirstItem(allPages);

  if (lastPageNumber - 1 === currentPage || lastPageNumber === currentPage) {
    return [1, -1, lastPageNumber - 1, lastPageNumber];
  }

  if (firstPage === currentPage) {
    return [currentPage, currentPage + 1, -1, lastPageNumber];
  }

  return [currentPage - 1, currentPage, -1, lastPageNumber];
}
