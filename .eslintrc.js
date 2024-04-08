module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    'parser': '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: { 'no-unused-vars': 'off' },
  }],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [ 'vue', '@typescript-eslint' ],
  rules: {
    'indent': [ 'error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'vue/multi-word-component-names': ['off', { 'ignores': ['**/*'] }],
    'comma-dangle': ['error', 'always-multiline'],
    // Vue 3ではOkらしい。
    'vue/no-setup-props-destructure': 0,
  },
  ignorePatterns: ['dist/**/*.js', 'api/**/*.ts'],
};
