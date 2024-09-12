/* eslint-disable @typescript-eslint/no-require-imports */
const babelOptions = {
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
};

module.exports = require("babel-jest").default.createTransformer(babelOptions);
