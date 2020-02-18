module.exports = {
    stories: ['../stories/welcome.stories.ts', '../**/*.stories.ts'],
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
