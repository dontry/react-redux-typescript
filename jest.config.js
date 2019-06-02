module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  preset: "ts-jest",
  testPathIgnorePatterns: ["<rootDir>/cypress/", "<rootDir>/node_modules"],
  moduleDirectories: ["node_modules"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // Setup Enzyme
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "\\.css$": "<rootDir>/src/test/fixtures/styleMock.ts"
  },
  setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts", "@testing-library/react/cleanup-after-each"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"]
};
