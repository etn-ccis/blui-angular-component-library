module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.svg$': 'identity-obj-proxy'
  },
  testRegex: 'src/.*(test|spec)\\.[jt]sx?$',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
}
