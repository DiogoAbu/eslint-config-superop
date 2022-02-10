module.exports = {
  overrides: [
    {
      env: {
        jest: true,
        'jest/globals': true,
      },
      plugins: ['jest'],
      files: [
        'jest.setup.js',
        'jest-setup.js',
        'jestSetup.js',
        '*.{spec,test}.{js,jsx,ts,tsx}',
        '**/__{mocks,tests}__/**/*.{js,jsx,ts,tsx}',
      ],
      rules: {
        'jest/no-disabled-tests': 1,
        'jest/no-focused-tests': 1,
        'jest/no-identical-title': 1,
        'jest/valid-expect': 1,
      },
    },
  ],
};
