module.exports = {
  extends: [
    './index.js',
    'plugin:jsx-a11y/recommended',
  ],

  plugins: [
    'jsx-a11y',
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'react/default-props-match-prop-types': 2,
    'react/display-name': 1,
    'react/forbid-component-props': 0, // TODO: we are discussing this
    'react/forbid-elements': 0,
    'react/forbid-foreign-prop-types': 2,
    'react/forbid-prop-types': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-filename-extension': 2,
    'react/jsx-first-prop-new-line': 2,
    'react/jsx-handler-names': 2,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-no-bind': 2,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
    'react/jsx-no-literals': 0,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/jsx-pascal-case': [2, { allowAllCaps: true }],
    'react/jsx-sort-props': 2,
    'react/jsx-tag-spacing': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2,
    'react/no-array-index-key': 1,
    'react/no-children-prop': 2,
    'react/no-danger': 1,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 1,
    'react/no-redundant-should-component-update': 2,
    'react/no-render-return-value': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/no-unused-prop-types': 2,
    'react/no-will-update-set-state': 1,
    'react/prefer-es6-class': 1,
    'react/prefer-stateless-function': 1,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': 2,
    'react/require-optimization': 0,
    'react/require-render-return': 2,
    'react/self-closing-comp': [2, { component: true, html: true }],
    'react/sort-comp': 2,
    'react/sort-prop-types': 2,
    'react/style-prop-object': 2,
    'react/void-dom-elements-no-children': 2,
  },
};
