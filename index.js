module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    FormData: false,
    global: true,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    window: false,
    XMLHttpRequest: false,
  },
  overrides: [
    {
      files: ['*.js'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
      },
      rules: {
        'unused-imports/no-unused-imports': 2,
        'unused-imports/no-unused-vars': [
          1,
          {
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
      },
    },
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
    },
  ],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'import', 'unused-imports', 'eslint-comments', 'prettier', 'jest'],
  root: true,
  rules: {
    'block-scoped-var': 0,
    'brace-style': [2, '1tbs'],
    camelcase: 2,
    'comma-dangle': 0,
    'comma-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    complexity: 0,
    'consistent-return': [
      2,
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    'consistent-this': 1,
    curly: [2, 'all'],
    'default-case': 0,
    'dot-notation': 1,
    'eol-last': 1,
    eqeqeq: [
      1,
      'always',
      {
        null: 'ignore',
      },
    ],
    'eslint-comments/no-aggregating-enable': 1,
    'eslint-comments/no-unlimited-disable': 1,
    'eslint-comments/no-unused-disable': 1,
    'eslint-comments/no-unused-enable': 1,
    'func-names': 0,
    'func-style': [
      2,
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'generator-star-spacing': [
      2,
      {
        after: true,
        anonymous: 'neither',
        before: false,
        method: {
          after: false,
          before: true,
        },
      },
    ],
    'guard-for-in': 0,
    'handle-callback-err': 1,
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'import/no-unresolved': [
      2,
      {
        ignore: ['^react-native-vector-icons/'],
      },
    ],
    'import/order': 0,
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 1,
    'jest/no-identical-title': 1,
    'jest/valid-expect': 1,
    'key-spacing': 0,
    'keyword-spacing': 1,
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': [
      2,
      {
        afterBlockComment: false,
        afterLineComment: false,
        allowArrayEnd: true,
        allowArrayStart: true,
        allowBlockEnd: true,
        allowBlockStart: true,
        allowClassEnd: true,
        allowClassStart: true,
        allowObjectEnd: true,
        allowObjectStart: true,
        beforeBlockComment: false,
        beforeLineComment: false,
        ignorePattern: '^ @ts-',
      },
    ],
    'max-depth': 0,
    'max-len': 0,
    'max-nested-callbacks': 0,
    'max-params': 0,
    'max-statements': 0,
    'new-cap': [
      2,
      {
        capIsNew: false,
      },
    ],
    'new-parens': 1,
    'no-alert': 1,
    'no-array-constructor': 1,
    'no-bitwise': 1,
    'no-caller': 1,
    'no-catch-shadow': 1,
    'no-cond-assign': 1,
    'no-console': 0,
    'no-const-assign': 2,
    'no-constant-condition': 0,
    'no-control-regex': 1,
    'no-debugger': 1,
    'no-delete-var': 1,
    'no-div-regex': 1,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-else-return': 2,
    'no-empty': 0,
    'no-empty-character-class': 1,
    'no-eq-null': 0,
    'no-eval': 2,
    'no-ex-assign': 1,
    'no-extend-native': 1,
    'no-extra-bind': 1,
    'no-extra-boolean-cast': 1,
    'no-extra-parens': 0,
    'no-extra-semi': 1,
    'no-fallthrough': 1,
    'no-floating-decimal': 1,
    'no-func-assign': 1,
    'no-implied-eval': 1,
    'no-inner-declarations': 0,
    'no-invalid-regexp': 1,
    'no-iterator': 1,
    'no-label-var': 1,
    'no-labels': 1,
    'no-lone-blocks': 1,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-mixed-requires': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-multi-spaces': 2,
    'no-multi-str': 0,
    'no-native-reassign': 0,
    'no-negated-in-lhs': 1,
    'no-nested-ternary': 0,
    'no-new': 1,
    'no-new-func': 2,
    'no-new-object': 1,
    'no-new-require': 1,
    'no-new-wrappers': 1,
    'no-obj-calls': 1,
    'no-octal': 1,
    'no-octal-escape': 1,
    'no-path-concat': 1,
    'no-plusplus': 0,
    'no-process-exit': 0,
    'no-proto': 1,
    'no-redeclare': 0,
    'no-regex-spaces': 1,
    'no-reserved-keys': 0,
    'no-restricted-modules': 1,
    'no-return-assign': 1,
    'no-script-url': 1,
    'no-self-compare': 1,
    'no-sequences': 1,
    'no-shadow': 1,
    'no-shadow-restricted-names': 1,
    'no-spaced-func': 1,
    'no-sparse-arrays': 1,
    'no-sync': 0,
    'no-ternary': 0,
    'no-trailing-spaces': 1,
    'no-undef': 2,
    'no-undef-init': 1,
    'no-undefined': 0,
    'no-underscore-dangle': [
      2,
      {
        allowAfterThis: true,
        allow: ['_raw', '_status', '_changed', '_data', '_locale', '_calendar', '_children', '_nativeTag'],
      },
    ],
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-use-before-define': [
      2,
      {
        classes: true,
        functions: false,
        variables: false,
      },
    ],
    'no-var': 2,
    'no-void': [
      1,
      {
        allowAsStatement: true,
      },
    ],
    'no-warning-comments': 0,
    'no-with': 1,
    'object-curly-newline': 0,
    'object-shorthand': [2, 'always'],
    'one-var': 0,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prettier/prettier': 2,
    'quote-props': 0,
    quotes: [1, 'single', 'avoid-escape'],
    radix: 1,
    'require-await': 2,
    semi: 1,
    'semi-spacing': 1,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^\\u0000'],
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          ['^react$', '^react-native$'],
          ['^react', '^@?\\w'],
          ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
          ['^!(/.*|$)'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'sort-imports': 0,
    'sort-vars': 0,
    'space-in-brackets': 0,
    'space-in-parens': 2,
    'space-infix-ops': 1,
    'space-unary-ops': [
      1,
      {
        nonwords: false,
        words: true,
      },
    ],
    'use-isnan': 1,
    'valid-jsdoc': 0,
    'valid-typeof': 1,
    'vars-on-top': 0,
    'wrap-iife': 0,
    'wrap-regex': 0,
    yoda: 1,
  },
  settings: {
    'import/extensions': ['.js'],
    react: {
      version: 'detect',
    },
  },
};
