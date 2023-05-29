module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
      'eslint:recommended',
      "plugin:vue/vue3-recommended",
      "prettier"
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/valid-attribute-name': false,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
}
