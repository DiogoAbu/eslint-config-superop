module.exports = {
  plugins: ['react-native'],
  rules: {
    'react-native/no-color-literals': 1,
    'react-native/no-inline-styles': 1,
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 2,
  },
  settings: {
    'import/ignore': ['react-native'],
  },
};
