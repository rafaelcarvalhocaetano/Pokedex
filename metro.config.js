/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  resolver: {
    /* resolver options */
   sourceExts: ['jsx','js', 'json', 'ts', 'tsx']
  },
  serializer: {
    /* serializer options */
  },
  server: {
    /* server options */
  },
  /* general options */
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
