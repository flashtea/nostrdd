const { TextDecoder, TextEncoder } = require('util')

module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  globals: {
    TextDecoder: TextDecoder,
    TextEncoder: TextEncoder,
  }
};

