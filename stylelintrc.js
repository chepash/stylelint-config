module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
  rules: {
    'selector-class-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/no-global-function-names': null,
    'property-no-vendor-prefix': null,
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'media',
        },
        {
          type: 'at-rule',
          name: 'supports',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
  },
  ignoreFiles: ['**/normalize.css'],
};
