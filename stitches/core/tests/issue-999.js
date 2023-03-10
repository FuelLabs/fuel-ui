import { createStitches } from '../src/index.js';

describe('Issue #519', () => {
  test('locally scoped token works 1 time', () => {
    const { css, getCssText } = createStitches({ prefix: 'fusion' });

    css({
      $$syntax: 'red',

      h1: {
        color: '$$syntax',
      },
    })();

    expect(getCssText()).toBe(
      `--sxs{--sxs:2 fusion-fuel_fjkySu}` +
        `@media{` +
        `.fusion-fuel_fjkySu{--fusion--syntax:red}` +
        `.fusion-fuel_fjkySu h1{color:var(--fusion--syntax)}` +
        `}`
    );
  });

  test('locally scoped prefix-free token works 1 time', () => {
    const { css, getCssText } = createStitches();

    css({
      $$syntax: 'red',

      h1: {
        color: '$$syntax',
      },
    })();

    expect(getCssText()).toBe(
      `--sxs{--sxs:2 fuel_fjkySu}` +
        `@media{` +
        `.fuel_fjkySu{---syntax:red}` +
        `.fuel_fjkySu h1{color:var(---syntax)}` +
        `}`
    );
  });

  test('locally scoped token works 2 times', () => {
    const { css, getCssText } = createStitches({ prefix: 'fusion' });

    css({
      $$syntax: 'red',

      h1: {
        color: '$$syntax',
      },

      h2: {
        color: '$$syntax',
      },
    })();

    expect(getCssText()).toBe(
      `--sxs{--sxs:2 fusion-fuel_lkpaIy}` +
        `@media{` +
        `.fusion-fuel_lkpaIy{--fusion--syntax:red}` +
        `.fusion-fuel_lkpaIy h1{color:var(--fusion--syntax)}` +
        `.fusion-fuel_lkpaIy h2{color:var(--fusion--syntax)}` +
        `}`
    );
  });

  test('locally scoped prefix-free token works 2 times', () => {
    const { css, getCssText } = createStitches();

    css({
      $$syntax: 'red',

      h1: {
        color: '$$syntax',
      },

      h2: {
        color: '$$syntax',
      },
    })();

    expect(getCssText()).toBe(
      `--sxs{--sxs:2 fuel_lkpaIy}` +
        `@media{` +
        `.fuel_lkpaIy{---syntax:red}` +
        `.fuel_lkpaIy h1{color:var(---syntax)}` +
        `.fuel_lkpaIy h2{color:var(---syntax)}` +
        `}`
    );
  });

  test('locally scoped token works 3 times', () => {
    const { css, getCssText } = createStitches({ prefix: 'fusion' });

    css({
      $$syntax: 'red',

      h1: {
        color: '$$syntax',
      },

      h2: {
        color: '$$syntax',
      },

      h3: {
        color: '$$syntax',
      },
    })();

    expect(getCssText()).toBe(
      `--sxs{--sxs:2 fusion-fuel_kbkiiL}` +
        `@media{` +
        `.fusion-fuel_kbkiiL{--fusion--syntax:red}` +
        `.fusion-fuel_kbkiiL h1{color:var(--fusion--syntax)}` +
        `.fusion-fuel_kbkiiL h2{color:var(--fusion--syntax)}` +
        `.fusion-fuel_kbkiiL h3{color:var(--fusion--syntax)}` +
        `}`
    );
  });

  test('locally scoped prefix-free token works 3 times', () => {
    const { css, getCssText } = createStitches();

    css({
      $$syntax: 'red',

      h1: {
        color: '$$syntax',
      },

      h2: {
        color: '$$syntax',
      },

      h3: {
        color: '$$syntax',
      },
    })();

    expect(getCssText()).toBe(
      `--sxs{--sxs:2 fuel_kbkiiL}` +
        `@media{` +
        `.fuel_kbkiiL{---syntax:red}` +
        `.fuel_kbkiiL h1{color:var(---syntax)}` +
        `.fuel_kbkiiL h2{color:var(---syntax)}` +
        `.fuel_kbkiiL h3{color:var(---syntax)}` +
        `}`
    );
  });
});
