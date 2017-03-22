module.exports = {
  'extends': [
    './index.js'
    'plugin:react/recommended',
  ],

  'plugins': [
    'react'
  ],

  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },

  'rules': {
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
    'react/jsx-no-literals': 0,
    'react/jsx-pascal-case': 2,
    'react/jsx-wrap-multilines': 2,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 1,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
  }
};
