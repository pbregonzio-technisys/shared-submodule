module.exports = {
  '*.+(js|ts|tsx|less|md|mdx|svg)': [
    (filenames) =>
      `eslint ${filenames.join(' ')} --ext .ts,.tsx --no-eslintrc -c rules/naming-conventions.js`,
    'yarn lint --cache --fix',
    'npx pretty-quick --staged',
  ],
};
