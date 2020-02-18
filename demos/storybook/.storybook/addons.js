
import '@storybook/addon-notes/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-storysource/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-viewport/register';

module.exports = {
    addons: [
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    // test: [/\.stories\.jsx?$/], This is default
                    include: [path.resolve(__dirname, '../stories')], // You can specify directories
                },
                loaderOptions: {
                    prettierConfig: { printWidth: 80, singleQuote: false },
                },
            },
        },
    ],
};
