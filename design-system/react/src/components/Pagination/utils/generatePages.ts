import { union } from 'lodash';

import { Separators } from '../constants';

type Arguments = {
  pagesCount?: number;
  innerLimit: number;
  outerLimit: number;
  currentPage: number;
};

export const getFirstItem = <T>(array: T[]): T => array[0];
export const getLastItem = <T>(array: T[]): T => array.slice(-1)[0];

export const generatePages = ({
  pagesCount,
  currentPage,
  innerLimit,
  outerLimit,
}: Arguments): number[] => {
  if (pagesCount == null) {
    return [];
  }

  const allPages = [...Array(pagesCount).keys()].map((page) => page + 1);

  if (innerLimit === 0 || outerLimit === 0) {
    return allPages;
  }

  const outerLeftPages = allPages.slice(0, outerLimit);
  const outerRightPages = allPages.slice(1).slice(-outerLimit);

  const lastPageOfOuterLeftPages = getLastItem(outerLeftPages);
  const firstPageOfOuterRightPages = getFirstItem(outerRightPages);

  const generateRightInnerPages = (): number[] => {
    const rightInnerLastIndex = currentPage + innerLimit;
    const isAfterFirstOuterRightPage =
      rightInnerLastIndex > firstPageOfOuterRightPages;

    return isAfterFirstOuterRightPage
      ? allPages.slice(currentPage + 1, firstPageOfOuterRightPages)
      : allPages.slice(currentPage, rightInnerLastIndex);
  };

  const generateLeftInnerPages = (): number[] => {
    const leftInnerFirstIndex = currentPage - innerLimit;
    const isBeforeLastOuterLeftPage =
      leftInnerFirstIndex < lastPageOfOuterLeftPages;

    return isBeforeLastOuterLeftPage
      ? allPages.slice(lastPageOfOuterLeftPages, currentPage - 1)
      : allPages.slice(leftInnerFirstIndex - 1, currentPage - 1);
  };

  const leftInnerPages = generateLeftInnerPages();
  const leftPages = union([...outerLeftPages], [...leftInnerPages]);
  const shouldHaveLeftSeparator =
    getFirstItem(leftInnerPages) > lastPageOfOuterLeftPages + 1;

  const rightInnerPages = generateRightInnerPages();
  const rightPages = union([...rightInnerPages], [...outerRightPages]);
  const shouldHaveRightSeparator =
    getLastItem(rightInnerPages) < firstPageOfOuterRightPages - 1;

  const unduplicatedPages = union(
    [...leftPages],
    [currentPage],
    [...rightPages]
  );

  const addSeparators = (pages: number[]): number[] =>
    pages.reduce<number[]>((acc: number[], page: number) => {
      const checkPageForSeparator = (): number[] => {
        if (page === lastPageOfOuterLeftPages && shouldHaveLeftSeparator) {
          return [lastPageOfOuterLeftPages, Separators.left];
        }

        if (page === firstPageOfOuterRightPages && shouldHaveRightSeparator) {
          return [Separators.right, firstPageOfOuterRightPages];
        }

        return [page];
      };

      return [...acc, ...checkPageForSeparator()];
    }, []);

  const pages = addSeparators(unduplicatedPages);

  return pages;
};
