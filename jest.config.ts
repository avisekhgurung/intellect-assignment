module.exports = {
    testEnvironment: 'jsdom',
    warnOnUnsupportedVersion: false,
    moduleNameMapper: {
      "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
    }
  };