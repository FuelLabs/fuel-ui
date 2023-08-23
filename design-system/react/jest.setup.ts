import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

if (process.env.DEBUG) {
  beforeEach(() => {
    configure({
      throwSuggestions: true,
    });
  });
}
