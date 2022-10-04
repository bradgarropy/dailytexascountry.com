const config = {
    clearMocks: true,
    collectCoverage: true,
    setupFilesAfterEnv: ["<rootDir>/src/test-utils/setup"],
    moduleDirectories: ["<rootDir>/src", "node_modules"],
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/src/test-utils/file.js",
        "\\.(css)$": "identity-obj-proxy",
        "^gatsby-page-utils/(.*)$": "gatsby-page-utils/dist/$1",
    },
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["<rootDir>/plop"],
}

module.exports = config
