module.exports = {
  preset: "jest-expo",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/components/**/*.tsx", "src/screens/**/*.tsx", "src/contexts/**/*.tsx", "src/hooks/*.ts", "src/services/data-layer/**/*.ts", "src/services/snowplow" ],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@react-native-async-storage/async-storage|@adobe/react-native-aepcore|@snowplow/react-native-tracker)",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest/setup.js"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
