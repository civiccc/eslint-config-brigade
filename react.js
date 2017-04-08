module.exports = {
  extends: [
    './index.js',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],

  plugins: [
    'jsx-a11y', // TODO: give these rules a full review
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // 'react/forbid-component-props': 2, TODO: we are discussing this
    'react/forbid-foreign-prop-types': 2,
    'react/forbid-prop-types': 1, // NOTE: will bump to error in a future major version
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-first-prop-new-line': [2, { multiline: true }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-no-bind': 2,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
    'react/jsx-no-target-blank': 2,
    'react/jsx-pascal-case': [2, { allowAllCaps: true }],
    'react/jsx-sort-props': 2,
    'react/jsx-space-before-closing': [2, 'always'],
    'react/jsx-tag-spacing': [2, {
      afterOpening: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never',
    }],
    'react/jsx-wrap-multilines': 2,
    'react/no-children-prop': 2,
    'react/no-danger': 1,
    'react/no-danger-with-children': 2,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 1,
    'react/no-string-refs': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unused-prop-types': 2,
    'react/require-default-props': 2,
    'react/self-closing-comp': [2, { component: true, html: true }],
    'react/sort-comp': 2,
    'react/sort-prop-types': 2,
    'react/style-prop-object': 2,
    'react/void-dom-elements-no-children': 2,
  },
};
