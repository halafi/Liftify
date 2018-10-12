module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "plugin:flowtype/recommended"
  ],
  plugins: [
    "react",
    "react-native",
    "flowtype",
    "jsx-a11y",
    "import",
    "prettier"
  ],
  env: {
    "react-native/react-native": true,
    jest: true
  },
  "rules": {
    "react/jsx-filename-extension": [
      1, { "extensions": [".js", ".jsx"] }
    ],
    // "react/prefer-stateless-function": [
    //   2, { "ignorePureComponents": true }
    // ],
    // "react/forbid-prop-types": [0, { "forbid": [] }],
    // "import/extensions": [1, "never", { "svg": "always" }],
    // "import/no-extraneous-dependencies": [
    //   "error",
    //   {
    //     "devDependencies": true,
    //     "optionalDependencies": false,
    //     "peerDependencies": false
    //   }
    // ],
    // "semi": ["error", "never"]
  },
};
