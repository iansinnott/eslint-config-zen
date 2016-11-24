# ESLint Config Zen

An ESLint config for use with the latest ESNext features, React and Flow

## Quick Install

```
yarn add --dev eslint eslint-config-zen eslint-plugin-react eslint-plugin-flowtype babel-eslint
echo '{"extends": ["zen"]}' > .eslintrc
```

## Usage with NPM

If you haven't checked out [Yarn][] yet I would highly recommended, but this config works perfectly with NPM:

```
npm install --save-dev eslint eslint-config-zen eslint-plugin-react eslint-plugin-flowtype babel-eslint
```

Then create a new `.eslintrc` which extends eslint-config-zen:

```
{
  "extends": ["zen"]
}
```

That's all!

[Yarn]: https://yarnpkg.com/
