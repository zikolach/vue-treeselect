module.exports = {
  root: true,
  extends: [ 'riophae/vue' ],
  globals: {
    PKG_VERSION: true,
  },
  settings: {
    'import/resolver': {
      node: null,
      webpack: {
        config: 'build/webpack.base.conf.js',
      },
    },
  },
  rules: {
    'import/exports-last': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'vue/attributes-order': 0,
    'multiline-comment-style': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-extra-parens': 0,
    'no-warning-comments': 0,
    'no-undefined': 0,
    'prefer-destructuring': 0,
  },
}
