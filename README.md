# Brigade's ESLint configuration

## Install

```sh
npm install --save-dev eslint-config-brigade
```

## Use

In your project's `.eslintrc`, use the `extends` feature:

```js
{
  'extends': 'eslint-config-brigade'
}
```

If you are using this in a project with React, extend the React configuration
instead:

```js
{
  'extends': 'eslint-config-brigade/react'
}
```
