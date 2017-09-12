module.exports = {
    webpack: (config, { dev }) => {
        // Perform customizations to webpack config
        if (dev)
            Object.assign(config, { devtool: 'eval-source-map'});
        // Important: return the modified config
        return config;
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        
        // Important: return the modified config
        return config;
    }
};