
import { relative } from 'path';

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => relative(process.cwd(), f))
    .join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.join(' ')}`;

export default {
  // Source code files
  'src/**/*.{js,jsx,ts,tsx}': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  // Test files only
  '**/*.test.{js,ts,jsx,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
  ],

  // Other formats
  '*.{json,css,scss,md}': ['prettier --write'],
};
