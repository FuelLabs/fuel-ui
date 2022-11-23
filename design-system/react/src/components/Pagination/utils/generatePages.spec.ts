import { generatePages, getFirstItem, getLastItem } from './generatePages';

describe('passwordStrength', () => {
  it('should get the last item of an array', () => {
    expect(getLastItem([1, 2, 3])).toBe(3);
  });

  it('should get the first item of an array', () => {
    expect(getFirstItem([1, 2, 3])).toBe(1);
  });

  it('should not render separator when number of pages is smaller than 3', () => {
    const pages = generatePages({ totalPagesNumber: 3, currentPage: 1 });

    expect(pages.length).toBe(3);
    expect(pages.includes(-1)).toBeFalsy();
  });

  it('should render separator when number of pages is bigger than 3', () => {
    const pages = generatePages({ totalPagesNumber: 12, currentPage: 1 });

    expect(pages.length).toBe(4);
    expect(pages.toString()).toBe('1,2,-1,12');
  });

  it('should render separator in even when current page is not the first', () => {
    const pages = generatePages({ totalPagesNumber: 12, currentPage: 5 });

    expect(pages.length).toBe(4);
    expect(pages.toString()).toBe('4,5,-1,12');
  });

  it('should render separator on the other side when current page is one step of the end', () => {
    const pages = generatePages({ totalPagesNumber: 12, currentPage: 11 });

    expect(pages.length).toBe(4);
    expect(pages.toString()).toBe('1,-1,11,12');
  });

  it('should render separator on the other side when current page is the last', () => {
    const pages = generatePages({ totalPagesNumber: 12, currentPage: 12 });

    expect(pages.length).toBe(4);
    expect(pages.toString()).toBe('1,-1,11,12');
  });
});
