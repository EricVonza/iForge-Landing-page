import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// Extend expect with DOM matchers
expect.extend(matchers);

// Clean up after each test
afterEach(() => {
  cleanup();
});
