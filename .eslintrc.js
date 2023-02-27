module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "prettier/prettier": [2],
    "react/jsx-filename-extension": [2, { extensions: [".tsx"] }],
    // reports wrong errors for React Native stylesheets
    "no-use-before-define": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "react/require-default-props": "off",
    camelcase: "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
};
