module.exports = {
  // setupFiles: ['./tests/setup/set-environment.js'],
  // preset: '@shelf/jest-dynamodb',
  transform: {
    '^.+\\.ts?$': 'babel-jest',
  },
  testTimeout: 10000,
  // moduleNameMapper: {
  //   // Jest needs to know about module aliasing as it doesn't run after webpack magic
  //   '^@src/(.*)$': '<rootDir>/src/$1',
  //   '^@savings/(.*)$': '<rootDir>/src/savings/$1',
  //   '^@queries/(.*)$': '<rootDir>/src/queries/$1',
  //   '^@commands/(.*)$': '<rootDir>/src/commands/$1',
  //   '^@transformers/(.*)$': '<rootDir>/src/transformers/$1',
  //   '^@tests/(.*)$': '<rootDir>/tests/$1',
  // },
};
