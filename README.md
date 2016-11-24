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

## Multiple Configs

This config exposes multiple configs for use in your projects:

* `zen/base`: Base JavaScript configuration, largely based on `eslint:recommended`.
* `zen/react`: For use with React / JSX
* `zen/flowtype`: For use with Flow

By default all configurations will be enabled. You can customize which pieces you'd like.

**NOTE:** The `zen/base` configuration is needed for the rest to work.

* **For projects without React or Flow:** `{ "extends": ["zen/base"] }`
* **For React Projects _without_ Flow:** `{ "extends": ["zen/base", "zen/react"] }`

[Yarn]: https://yarnpkg.com/
