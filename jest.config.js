module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      "\\.svg": "<rootDir>/__mocks__/svg.js",
        '\\.(css|less)$': 'identity-obj-proxy',
      },
    testEnvironment: "jsdom",
  };