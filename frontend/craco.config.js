// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        // Add your webpack rules here
        webpackConfig.module.rules.push({
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        });
  
        return webpackConfig;
      },
    },
  };
  