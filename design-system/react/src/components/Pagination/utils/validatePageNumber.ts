export const isDecimalNumber = (number: number): boolean => {
  return number - Math.floor(number) !== 0;
};

/** @description - this ensures that the number is a valid page number */
export function validatePageNumber(page: number) {
  if (isDecimalNumber(page)) {
    console.warn(
      'Fuel UI -> Pagination -> currentPage should be an integer number'
    );
    return false;
  }

  if (page < 0) {
    console.warn(
      'Fuel UI -> Pagination -> currentPage should be an integer number'
    );
    return false;
  }

  return true;
}
