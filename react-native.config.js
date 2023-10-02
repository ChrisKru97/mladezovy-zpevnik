module.exports = {
  project: {
    ios: {
      unstable_reactLegacyComponentNames: ['CellContainer', 'AutoLayoutView'],
    },
    android: {},
  },
  dependencies: {
    'react-native-vector-image': {
      platforms: {
        android: null,
      },
    },
    'react-native-svg': {
      platforms: {
        ios: null,
      },
    },
  },
};
