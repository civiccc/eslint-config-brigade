module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },

  'rules': {
    'block-scoped-var': 0,
    'brace-style': [2, '1tbs', { 'allowSingleLine': false }],
    'camelcase': [2, { 'properties': 'never' }],
    'comma-dangle': 0,
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': [2, 'last'],
    'complexity': [1, 10],
    'computed-property-spacing': [2, 'never'],
    'consistent-return': 0,
    'curly': 2,
    'dot-notation': 2,
    'eqeqeq': 2,
    'guard-for-in': 2,
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': 0,
    'max-len': [1, 80, 2],
    'max-nested-callbacks': [2, 3],
    'max-params': [1, 4],
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],
    'new-parens': 2,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-caller': 2,
    'no-catch-shadow': 0, // Off because we don't support IE8 and older
    'no-cond-assign': 2,
    'no-console': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 0,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-empty-label': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 0,
    'no-multi-str': 2,
    'no-multiple-empty-lines': 2,
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-process-exit': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-underscore-dangle': 0,
    'no-unreachable': 2,
    'no-unused-expressions': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    'no-var': 2,
    'no-void': 2,
    'no-with': 2,
    'object-shorthand': [2, 'methods'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'prefer-const': 2,
    'quotes': [2, 'single', 'avoid-escape'],
    'radix': 2,
    'semi': [2, 'always'],
    'semi-spacing': [2, { 'before': false, 'after': true }],
    'space-after-keywords': [2, 'always'],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-return-throw-case': 2,
    'space-unary-ops': 2,
    'spaced-comment': [2, 'always'],
    'strict': [2, 'never'],
    'use-isnan': 2,
    'valid-jsdoc': [2, {
      'prefer': { 'returns': 'return' },
      'requireParamDescription': false,
      'requireReturn': false,
      'requireReturnDescription': false,
    }],
    'valid-typeof': 2,
    'wrap-iife': [2, 'outside'],
    'yoda': 2,
  }
};
