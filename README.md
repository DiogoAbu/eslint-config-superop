# eslint-config-superop

A Super Opinionated ESLint Shareable Config with Prettier

It supports:
- JavaScript
- TypeScript
- Node
- React
- React Native
- Jest
- JSON files
- Directory aliases ([babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver))

## Installation

1. Install all peer dependencies:

**yarn**:
```sh
npx install-peerdeps --yarn --dev eslint-config-superop
```
**npm**:
```sh
npx install-peerdeps --dev eslint-config-superop
```

2. Install [eslint-config-superop](https://github.com/DiogoAbu/eslint-config-superop) as a development dependecy of your project:

**yarn**:
```sh
yarn add --dev eslint-config-superop
```
**npm**:
```sh
npm install --save-dev eslint-config-superop
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

This is all you need on your `.eslintrc` file:

```json
{
  "extends": "eslint-config-superop"
}
```

And this string for the `.prettierrc` file:

```
"eslint-config-superop/.prettierrc"
```

ESLint and Prettier both support ignore files, but they do not have an extend feature so you should **copy and paste** the following files inside your project folder:
- [.eslintignore](.eslintignore)
- [.prettierignore](.prettierignore)

Copy ignores to current folder:
```sh
cp -r node_modules/eslint-config-superop/.eslintignore .
cp -r node_modules/eslint-config-superop/.prettierignore .
```

This package also goes well with EditorConfig, just **copy and paste** [.editorconfig](.editorconfig) inside your project folder.

Copy EditorConfig to current folder:
```sh
cp -r node_modules/eslint-config-superop/.editorconfig .
```

You might also want to **copy and paste** the following scripts from our [package.json](package.json):
- eslint
- prettier
- lint
- lint-fix

## Working with VS Code

To fix your files make sure you have the [VS Code ESLint](https://github.com/Microsoft/vscode-eslint) extension installed.

Add a `.vscode` folder at the root of your project with this [settings.json](.vscode/settings.json) file.

The important parts are:
```json
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
```
```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```
