import { relative } from 'path';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => relative(process.cwd(), f))
    .join(' --file ')}`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.join(' ')}`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,css,scss,md}': ['prettier --write'],
};
