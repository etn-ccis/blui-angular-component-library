const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
            },
        ],
    });
    config.module.rules.push({
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
        ],
    });
    config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }));
    config.watchOptions = { ignored: [/node_modules([\\]+|\/)+(?!@pxblue)/] };
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
