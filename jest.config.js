module.exports = {
  preset: 'react-native',
  testMatch: ['**/?(*.)test.js?(x)'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/etc/jestSetup.js'],
  setupTestFrameworkScriptFile: '<rootDir>/etc/jestSetupFramework.js',
};
