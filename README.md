# My personal ESLint Config

## Quick Install

```
yarn add --dev eslint eslint-config-iansinnott eslint-plugin-react eslint-plugin-flowtype babel-eslint
echo '{"extends": ["iansinnott"]}' > .eslintrc
```

## Usage with NPM

If you haven't checked out [Yarn][] yet I would highly recommended, but this config works perfectly with NPM:

```
npm install --save-dev eslint eslint-config-iansinnott eslint-plugin-react eslint-plugin-flowtype babel-eslint
```

Then create a new `.eslintrc` which extends trustar:

```
{
  "extends": ["iansinnott"]
}
```

That's all!

[Yarn]: https://yarnpkg.com/
