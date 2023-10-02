module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './components',
          '^@helpers/(.+)': './helpers/\\1',
          '@screens': './screens',
          '@providers': './providers',
          '^@constants/(.+)': './constants/\\1',
          '@hooks': './hooks',
          '@types': './types',
          '@icons': './icons/index.android',
          '@icons/(.+)': './icons/\\1',
        },
      },
    ],
  ],
};
