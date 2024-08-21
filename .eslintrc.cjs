const rules = {
  semi: ["error", "always"],
  quotes: ["error", "double"],
  "space-before-function-paren": ["error", "never"],
  "array-bracket-spacing": ["error", "never"],
};

module.exports = {
  extends: "@chatie",
  rules,
  env: {
    jest: true,
  },
};
