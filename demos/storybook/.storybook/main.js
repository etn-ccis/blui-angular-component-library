var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const options = {
    transpileOnly: true,
    configFile: path.resolve(__dirname, '../tsconfig.json')
};

module.exports = {
    stories: ['../stories/welcome.stories.ts', '../stories/**/*.stories.ts'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-notes',
        '@storybook/addon-viewport',
        '@storybook/addon-storysource',
        'storybook-dark-mode/register',
        '@storybook/addon-google-analytics/register',
        // @accessibility remove the following line and all other lines following @accessibility in the app to hide the a11y addon
        '@storybook/addon-a11y/register',
        '@brightlayer-ui/storybook-rtl-addon/register',
    ],
    webpackFinal: async (config, { configType })=> {
        config.module.rules.push( { // Angular linker needed to link partial-ivy code
            // See https://angular.io/guide/creating-libraries#consuming-partial-ivy-code-outside-the-angular-cli
            test: /\.$/i,
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: ['@angular/compiler-cli/linker/babel'],
                    compact: false,
                    cacheDirectory: true
                }
            }
        });
        config.module.rules.push({
            include: [path.resolve(__dirname, '../stories')],
            exclude: [path.resolve(__dirname, '../node_modules')],
            test: /\.(ts)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                    options
                },
            ],
        });
        config.module.rules.push({
            include: [path.resolve(__dirname, '../stories')],
            exclude: [path.resolve(__dirname, '../node_modules')],
            test: /\.stories\.(ts)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                    options
                },
                {
                    loader: require.resolve('@storybook/source-loader'),
                    options: { parser: 'typescript' },
                },
            ],
            enforce: 'pre',
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
        config.plugins.push(new ForkTsCheckerWebpackPlugin());
        config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }));
        config.watchOptions = { ignored: [/node_modules([\\]+|\/)+(?!@brightlayer-ui)/] };
        return config;
    },
};
