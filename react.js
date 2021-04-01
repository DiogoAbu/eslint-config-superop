module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:react/all'],
  globals: {
    JSX: true,
  },
  overrides: [
    {
      env: {
        jest: true,
        'jest/globals': true,
      },
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
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'jsx-quotes': [1, 'prefer-single'],
    'react-hooks/exhaustive-deps': [
      2,
      {
        additionalHooks:
          '^(useAutorun|useCode|useBackHandler|useBackHandlerOnFocus|useFocusEffect|useMemoOne|useDimensions|useTheme|useTranslation)$',
      },
    ],
    'react-hooks/rules-of-hooks': 2,
    'react/destructuring-assignment': [
      2,
      'always',
      {
        ignoreClassFields: true,
      },
    ],
    'react/display-name': 0,
    'react/forbid-component-props': 0,
    'react/function-component-definition': 0,
    'react/jsx-boolean-value': 2,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-indent': [
      2,
      2,
      {
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-indent-props': [
      2,
      {
        ignoreTernaryOperator: true,
        indentMode: 2,
      },
    ],
    'react/jsx-max-depth': [
      2,
      {
        max: 6,
      },
    ],
    'react/jsx-max-props-per-line': 0,
    'react/jsx-newline': 0,
    'react/jsx-no-bind': [
      2,
      {
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 1,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-pascal-case': [
      2,
      {
        ignore: ['FAB'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': [
      2,
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': [
      2,
      {
        ignoreStateless: true,
      },
    ],
    'react/no-set-state': 0,
    'react/no-string-refs': 1,
    'react/no-unknown-property': 0,
    'react/no-unstable-nested-components': [
      2,
      {
        allowAsProps: true,
      },
    ],
    'react/no-unused-state': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 1,
    'react/require-default-props': [
      2,
      {
        ignoreFunctionalComponents: true,
      },
    ],
    'react/self-closing-comp': 1,
    'react/style-prop-object': [
      2,
      {
        allow: ['StatusBar'],
      },
    ],
    'react/wrap-multilines': 0,
  },
  settings: {
    'import/extensions': ['.jsx'],
    'import/ignore': ['react-navigation'],
    react: {
      version: 'detect',
    },
  },
};
