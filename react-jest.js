module.exports = {
  overrides: [
    {
      files: [
        'jest.setup.js',
        'jest-setup.js',
        'jestSetup.js',
        '*.{spec,test}.{js,ts,tsx}',
        '**/__{mocks,tests}__/**/*.{js,ts,tsx}',
      ],
      rules: {
        'react/jsx-no-constructed-context-values': 0,
      },
    },
  ],
};
