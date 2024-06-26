module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          '@globalState': './src/globalState',
          '@api': './src/api',
          '@services': './src/services',
          '@context': './src/context',
        },
      },
    ],
  ],
}
