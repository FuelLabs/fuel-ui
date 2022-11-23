const SEPARATOR = -1;

export const getFirstItem = <T>(array: T[]): T => array[0];
export const getLastItem = <T>(array: T[]): T => array.slice(-1)[0];

type GeneratePagesOptions = {
  totalPagesNumber: number;
  currentPage: number;
};

export function generatePages({
  totalPagesNumber,
  currentPage,
}: GeneratePagesOptions) {
  if (!totalPagesNumber) {
    return [];
  }

  const allPages = [...Array(totalPagesNumber).keys()].map((page) => page + 1);

  if (allPages.length <= 3) {
    return allPages;
  }

  const lastPageNumber = getLastItem(allPages);
  const firstPage = getFirstItem(allPages);

  if (lastPageNumber - 1 === currentPage || lastPageNumber === currentPage) {
    return [1, SEPARATOR, lastPageNumber - 1, lastPageNumber];
  }

  if (firstPage === currentPage) {
    return [currentPage, currentPage + 1, SEPARATOR, lastPageNumber];
  }

  return [currentPage - 1, currentPage, SEPARATOR, lastPageNumber];
}
