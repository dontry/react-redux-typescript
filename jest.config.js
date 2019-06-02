module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  preset: "ts-jest",
  moduleDirectories: ["node_modules"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // Setup Enzyme
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "@stores": "<rootDir>/src/stores",
    "@actions": "<rootDir>/src/actions",
    src: "<rootDir>/src",
    "\\.css$": "<rootDir>/src/test/fixtures/styleMock.ts"
  },
  setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"]
};
