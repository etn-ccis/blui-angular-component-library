var path = require('path');

module.exports = {
    stories: ['../stories/welcome.stories.ts', '../stories/**/*.stories.ts'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-notes',
        '@storybook/addon-viewport',
        'storybook-dark-mode/register',
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    // test: [/\.stories\.jsx?$/], This is default
                    include: [path.resolve(__dirname, '../stories')], // You can specify directories
                },
                loaderOptions: {
                    prettierConfig: '@pxblue/prettier-config'
                },
            },
        },
    ],
};
