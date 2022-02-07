module.exports = {
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    // console.log("config" , config.output)
    // var newconfig = config
    // newconfig.output.filename = '[name][chunkhash].js';
    // newconfig.output.chunkFilename = '[name][chunkhash].js';
    return config
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'my-build-id'
  },
};
