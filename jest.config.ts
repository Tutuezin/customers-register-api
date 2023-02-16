/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@controllers/(.*)$": "<rootDir>./src/controllers/$1",
    "^@services/(.*)$": "<rootDir>./src/services/$1",
    "^@repositories/(.*)$": "<rootDir>./src/repositories/$1",
    "^@middlewares/(.*)$": "<rootDir>./src/middlewares/$1",
    "^@schemas/(.*)$": "<rootDir>./src/schemas/$1",
    "^@utils/(.*)$": "<rootDir>./src/utils/$1",
  },
};
