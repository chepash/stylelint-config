module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
  rules: {
    'selector-class-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/no-global-function-names': null,
    'property-no-vendor-prefix': null,

    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['inset'],
      },
    ],

    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'declarations',
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
  },
  ignoreFiles: ['**/normalize.css'],
};
