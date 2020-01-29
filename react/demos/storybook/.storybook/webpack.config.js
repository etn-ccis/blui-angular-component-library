const webpack = require("webpack");

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
            },
        ],
    });
    config.watchOptions = { ignored: [ /node_modules([\\]+|\/)+(?!@pxblue)/ ] };
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
