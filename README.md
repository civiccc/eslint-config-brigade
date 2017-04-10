# Brigade's ESLint configuration

This package provides Brigade's ESLint config (`.eslintrc`) as an extensible shared config.

## Install

```sh
npm install --save-dev eslint-config-brigade
```

## Usage

1. Install the correct version of each package listed by the command:

```sh
npm info "eslint-config-brigade@latest" peerDependencies
```

2. In your project's `.eslintrc`, use the `extends` feature:

```js
{
  extends: 'eslint-config-brigade'
}
```

If you are using this in a project with React, extend the React configuration instead:

```js
{
  extends: 'eslint-config-brigade/react'
}
```

If you disagree with any of our rules, simply override them locally in the `rules` section of your `.eslintrc`. For example, to allow not using semi-colons:

```js
{
  rules: {
    'semi': 0, // 0 for off, 1 to warn, 2 to error
  }
}
```

### Safe to use in production

Unlike many other configs, `eslint-config-brigade` should have no issue being installed in a production (`NODE_ENV=production`) environment.

## FAQ

### `eslint-config-brigade` breaks on npm2

`eslint-config-brigade` does **NOT** support npm2 and below. This is because [npm3 changed the way the `peerDependencie`s are handled compared to npm2](https://nodejs.org/en/blog/npm/peer-dependencies/), and we believe the npm2 implementation to sub-par, and supporting it requires `package.json` "hacks" that we don't like. `eslint-config-brigade` may work with npm2, but we offer no support if it does not.

**NOTE**: We have found that even if you are using npm2, you may be able to get the package to install properly if you use the [yarn package manager](http://yarnpkg.com/) instead. (We almost exclusively use yarn at Brigade; it is significantly faster than npm.)
