module.exports = {
    webpack(config, { dev }) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack', 'url-loader'],
          })
      return config;
    }
  }