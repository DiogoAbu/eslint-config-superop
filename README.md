<h1 align="center">Eslint Config Super Opinionated</h1><br>

<p align="center">
  Clean Eslint config with Prettier, TypeScript, and absolute imports.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/eslint-config-superop">
    <img alt="npm" src="https://img.shields.io/npm/v/eslint-config-superop?style=flat-square">
  </a>
  <a href="https://github.com/DiogoAbu/eslint-config-superop/actions">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/DiogoAbu/eslint-config-superop/Generate%20Release%20and%20Publish%20to%20NPM?label=Generate%20Release%20and%20Publish%20to%20NPM&style=flat-square">
  </a>
</p>

<!-- [BEGIN] Don't edit this section, instead run Markdown AIO: Update Table of Contents -->
## 🚩 Table of Contents

- [🚩 Table of Contents](#-table-of-contents)
- [🚀 Introduction](#-introduction)
- [🎨 Features](#-features)
- [🔧 Installation](#-installation)
- [📖 Usage](#-usage)
- [💬 Contributing](#-contributing)
- [❤️ Acknowledgments](#️-acknowledgments)
<!-- [END] Don't edit this section, instead run Markdown AIO: Update Table of Contents -->

## 🚀 Introduction

This is a Eslint Shareable Config that comes pre-configured with tons of stuff.

## 🎨 Features

- JavaScript
- TypeScript
- Node
- React
- React Native
- Jest
- JSON files
- Directory aliases using [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) with linting from [eslint-import-resolver-babel-module](https://github.com/tleunen/eslint-import-resolver-babel-module)

## 🔧 Installation

1. Install necessary dependencies:

```sh
npx install-peerdeps --yarn --dev eslint-config-superop
# or
npx install-peerdeps --dev eslint-config-superop
```

2. Install [eslint-config-superop](https://github.com/DiogoAbu/eslint-config-superop) as a development dependecy of your project:

```sh
yarn add --dev eslint-config-superop
# or
npm install --save-dev eslint-config-superop
```

## 📖 Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

Add the base config to your `.eslintrc` file:
```jsonc
{
  "extends": [
    "superop"
  ]
}
```

### Usage with TypeScript

1. Install dependencies:

```sh
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript
```

2. Update your `.eslintrc` file:

```jsonc
{
  "extends": [
    "superop",
    "superop/typescript",
  ]
}
```

### Usage with React

1. Install dependencies:

```sh
yarn add --dev eslint-plugin-react eslint-plugin-react-hooks
```

2. Update your `.eslintrc` file:

```jsonc
{
  "extends": [
    "superop",
    // "superop/typescript", // Uncomment if using TypeScript, and install deps for it
    "superop/react",
  ]
}
```

### Usage with React Native

1. Install dependencies:

```sh
yarn add --dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native
```

2. Update your `.eslintrc` file:

```jsonc
{
  "extends": [
    "superop",
    // "superop/typescript", // Uncomment if using TypeScript, and install deps for it
    "superop/react",
    "superop/react-native",
  ]
}
```

### Usage with directory alises (absolute import) for Babel

1. Install [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) and configure babel

2. Install dependencies:

```sh
yarn add --dev eslint-import-resolver-babel-module
```

2. Update your `.eslintrc` file:

```jsonc
{
  "extends": [
    "superop",
    "superop/import-resolver-babel",
    // "superop/typescript", // Uncomment if using TypeScript
    // "superop/react",  // Uncomment if using React
    // "superop/react-native",  // Uncomment if using React Native
  ]
}
```

### Usage with Prettier

This is all you need on your `.prettierrc` file:

```
"eslint-config-superop/.prettierrc.js"
```

ESLint and Prettier both support ignore files, but they do not have an extend feature so you should **copy and paste** the following files inside your project folder:
- [.eslintignore](.eslintignore)
- [.prettierignore](.prettierignore)

Copy ignores to current folder:
```sh
cp -r node_modules/eslint-config-superop/.eslintignore .
cp -r node_modules/eslint-config-superop/.prettierignore .
```

### Usage with EditorConfig

This package also goes well with EditorConfig, just **copy and paste** [.editorconfig](.editorconfig) inside your project folder.

Copy EditorConfig to current folder:
```sh
cp -r node_modules/eslint-config-superop/.editorconfig .
```

### Lint scripts

You might want to **copy and paste** the following scripts from our [package.json](package.json):
- eslint
- prettier
- lint
- lint-fix

### Working with VS Code

To fix your files make sure you have the [VS Code ESLint](https://github.com/Microsoft/vscode-eslint) extension installed.

Add a `.vscode` folder at the root of your project with this [settings.json](.vscode/settings.json) file.

The important parts are:
```json
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
```
```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```

## 💬 Contributing

Would like to help make this package better? Please take a look at the [contributing guidelines](./CONTRIBUTING.md) for a detailed explanation on how you can contribute.

## ❤️ Acknowledgments

I'd like thank my daily coffee!
