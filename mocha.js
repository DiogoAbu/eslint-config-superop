module.exports = {
  overrides: [
    {
      extends: ['plugin:mocha/recommended'],
      files: [
        '.mocharc.js',
        '*.{spec,test}.{js,jsx,ts,tsx}',
        '**/test/**/*.{js,jsx,ts,tsx}',
        '**/__{mocks,tests}__/**/*.{js,jsx,ts,tsx}',
      ],
      plugins: ['mocha'],
      rules: {
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false,
          },
        ],
        'prefer-arrow-callback': [0],
      },
    },
  ],
};
