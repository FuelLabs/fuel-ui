module.exports = {
  '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `pnpm eslint --fix ${filenames.join(' ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `pnpm prettier --write ${filenames.join(' ')}`,
};
