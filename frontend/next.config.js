const path = require('path')

module.exports = {
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
        config.resolve.alias["react"] = path.resolve("./node_modules/react");
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack', 'url-loader'],
          })
      return config;
    }
  }
