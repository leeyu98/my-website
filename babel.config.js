module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  plugins: [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  cleanupIDs: false,
                },
              },
            },
          ],
        },
      },
    ],
  ],
};
