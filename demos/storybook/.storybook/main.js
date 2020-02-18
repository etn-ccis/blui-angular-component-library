module.exports = {
    stories: ['../src/stories/welcome.stories.ts', '../src/stories/**/*.stories.ts'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-notes',
        '@storybook/addon-viewport',
        {
            name: '@storybook/addon-storysource',
            options: {
                loaderOptions: {
                    prettierConfig: require('@pxblue/prettier-config')
                },
            },
        },
    ],
};
