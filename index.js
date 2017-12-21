module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
  ],

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  plugins: [
    'import',
  ],

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },

  rules: {
    'accessor-pairs': 2,
    'array-bracket-newline': 0, // TODO: when it supports single item line-breaked array (like `plugins` above): [2, { multiline: true }],
    'array-bracket-spacing': [1, 'never'],
    'array-callback-return': 2,
    'array-element-newline': 0, // TODO: when it supports single item line-breaked array (like `plugins` above): [2, { multiline: true }],
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'arrow-spacing': [2, { before: true, after: true }],
    'block-scoped-var': 0,
    'brace-style': [2, '1tbs', { allowSingleLine: false }],
    'camelcase': [2, { properties: 'never' }],
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    'complexity': [1, 10],
    'computed-property-spacing': [2, 'never'],
    'consistent-return': 0,
    'curly': 2,
    'dot-notation': 2,
    'eol-last': [2, 'unix'],
    'eqeqeq': 2,
    'for-direction': 2,
    'getter-return': 2,
    'func-call-spacing': 2,
    'guard-for-in': 2,
    'indent': [2, 2, { SwitchCase: 1 }],
    'jsx-quotes': [2, 'prefer-single'],
    'import/default': 0, // TODO: enable once module.exports is supported
    'import/extensions': 2,
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-absolute-path': 2,
    'import/no-anonymous-default-export': 0, // TODO: we are discussing this rule's options
    'import/no-deprecated': 1, // NOTE: this rule is still in WIP stage
    'import/no-duplicates': 2,
    'import/no-dynamic-require': 2,
    'import/no-extraneous-dependencies': 2,
    'import/no-internal-modules': 0, // NOTE: Brigade uses a mono-repo + Lerna which curently does not play nice with this rule
    'import/no-mutable-exports': 2,
    'import/no-named-as-default-member': 2,
    'import/no-named-as-default': 2,
    'import/no-named-default': 2,
    'import/no-namespace': 2,
    'import/no-unassigned-import': 1, // NOTE: sometimes we do global polyfills - we'd like to make this a 2 eventually...
    'import/no-webpack-loader-syntax': 2,
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['index', 'sibling', 'parent'],
        ],
      },
    ],
    'import/prefer-default-export': 2,
    'import/unambiguous': 0, // NOTE: needed until we fully adopt import/export over modules.export
    'object-curly-spacing': [1, 'always'],
    'key-spacing': 0,
    'keyword-spacing': 2,
    'max-len': [2, { code: 100, ignoreComments: true, ignoreUrls: true }],
    'max-nested-callbacks': 0,
    'max-params': [1, 4],
    'new-cap': [2, { newIsCap: true, capIsNew: false }],
    'new-parens': 2,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-await-in-loop': 2,
    'no-bitwise': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-catch-shadow': 0, // NOTE: Off because we don't support IE8 and older
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-confusing-arrow': [2, { allowParens: true }],
    'no-const-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-duplicate-imports': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-extra-semi': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': [2, { skipStrings: true, skipTemplates: true }],
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-multi-spaces': [2, { ignoreEOLComments: true }],
    'no-multi-str': 2,
    'no-multiple-empty-lines': 2,
    'no-nested-ternary': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal-escape': 2,
    'no-process-exit': 2,
    'no-proto': 2,
    'no-prototype-builtins': 0,
    'no-regex-spaces': 2,
    'no-restricted-globals': [2, 'event'],
    'no-return-assign': 0,
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 1,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef-init': 2,
    'no-underscore-dangle': 0,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-unused-expressions': 2,
    'no-use-before-define': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-useless-return': 2,
    'no-var': 2,
    'no-void': 2,
    'no-with': 2,
    'object-shorthand': [2, 'always'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'padding-line-between-statements': 0,
    'prefer-const': 2,
    'prefer-promise-reject-errors': 2,
    'quotes': [2, 'single', 'avoid-escape'],
    'radix': 2,
    'require-await': 0,
    'semi': [2, 'always'],
    'semi-spacing': [2, { before: false, after: true }],
    'semi-style': 2,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': [2, 'always'],
    'strict': [2, 'never'],
    'switch-colon-spacing': 2,
    'use-isnan': 2,
    'valid-jsdoc': [
      2,
      {
        prefer: { returns: 'return' },
        preferType: { boolean: 'Bolean', object: 'Object', number: 'Number', string: 'String' },
        requireParamDescription: true,
        requireReturn: false,
        requireReturnDescription: true,
      },
    ],
    'valid-typeof': 2,
    'wrap-iife': [2, 'outside'],
    'yoda': 2,
  },
};
