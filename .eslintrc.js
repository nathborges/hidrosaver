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
        'vue/valid-attribute-name': 'off',
        'vue/multi-word-component-names': 0,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
}
