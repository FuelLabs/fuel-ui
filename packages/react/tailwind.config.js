const { createTailwindTheme } = require('@fuel/theme')

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: createTailwindTheme(),
}
