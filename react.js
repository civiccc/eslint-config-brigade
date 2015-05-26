module.exports = {
  'extends': './index.js',

  'plugins': [
    'react'
  ],

  'ecmaFeatures': {
    'jsx': true
  },

  'rules': {
    'react/jsx-boolean-value': 2,
    'react/display-name': 0,
    'react/jsx-quotes': [2, 'single', 'avoid-escape'],
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 1,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 2,
    'react/wrap-multilines': 2,
  }
};
