module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },
  testMatch: ['<rootDir>/src/__tests__/**/*.test.ts'],
  resetMocks: true,
};
