import { generatePages } from './helpers';

function generate(
  pagesCount: number = 10,
  currentPage: number = 5,
  pagesToDisplay: number = 10,
) {
  const res = generatePages({
    pagesCount,
    currentPage,
    pagesToDisplay,
  });
  return res.join(',');
}

function generateFirst(a: number, b: number, c: number) {
  const result = generate(a, b, c);
  const list = [...Array(c)].map((_, i) => i + 1);
  if (a === c) {
    expect(result).toBe(list.join(','));
  } else {
    expect(result).toBe(`${list.slice(0, list.length - 2)},-1,${a}`);
  }
}
function generateLast(a: number, b: number, c: number) {
  const result = generate(a, b, c);
  const list1 = [...Array(a)].map((_, i) => i + 1);
  if (a === c) {
    expect(result).toBe(list1.join(','));
  } else {
    expect(result).toBe(`1,-1,${list1.slice(-c + 2).join(',')}`);
  }
}
function generateMiddle(a: number, b: number, c: number) {
  const result = generate(a, b, c);
  const list = [...Array(a)].map((_, i) => i + 1);
  if (a === c) {
    expect(result).toBe(list.join(','));
  } else {
    const m = c - 2 * 2;
    expect(result).toBe(
      `1,-1,${list.slice(b - 2, b + m - 2).join(',')},-2,${a}`,
    );
  }
}

describe('generatePages', () => {
  it('should return right value if current page is first', () => {
    const length = 100;
    for (let i = 6; i <= length; i += 1) {
      generateFirst(length, 1, i);
    }
  });
  it('should return right value if current page is in the last ones', () => {
    const length = 100;
    for (let i = 6; i <= length; i += 1) {
      generateLast(length, length, i);
    }
  });
  it('should return right value if current page is in the middle', () => {
    const length = 100;
    for (let i = 8; i <= 30; i += 1) {
      generateMiddle(length, i + 3, i);
    }
  });
});
