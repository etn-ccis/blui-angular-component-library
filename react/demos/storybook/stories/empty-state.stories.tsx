import React from 'react';
import { action } from '@storybook/addon-actions';
import { EmptyState } from '@pxblue/react-components';

import DevicesIcon from '@material-ui/icons/Devices';
import AddIcon from '@material-ui/icons/AddCircleOutlined';
import Button from '@material-ui/core/Button';
import AlertIcon from '@material-ui/icons/NotificationImportant';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

export const stories = storiesOf('Empty State', module);
stories.addParameters({
    notes: { markdown: require('./../../../docs/EmptyState.md') },
});

stories.add('with actions', () => {
    const title = text('Title', 'No Devices');
    const actionText = text('Action Text', 'Add Device');
    return (
        <EmptyState
            icon={<DevicesIcon fontSize={'inherit'} />}
            title={title}
            actions={
                <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: '10px' }}
                    onClick={action('Button Clicked')}
                >
                    <AddIcon style={{ marginRight: '5px' }} />
                    {actionText}
                </Button>
            }
        />
    );
});

stories.add('as a placeholder', () => {
    const title = text('Title', 'Predictions Page Coming Soon');
    const description = text('Description', 'A fully redesigned predictions page is coming in our next release!');
    const actionText = text('Action Text', 'Learn More');
    return (
        <EmptyState
            icon={<TrendingUpIcon fontSize={'inherit'} style={{ marginBottom: '0' }} />}
            title={title}
            description={description}
            actions={
                <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    style={{ margin: '10px' }}
                    onClick={action('Button Clicked')}
                >
                    {actionText}
                </Button>
            }
        />
    );
});

stories.add('as text only', () => {
    const title = text('Title', 'No Alarms Found');
    return <EmptyState icon={<AlertIcon fontSize={'inherit'} />} title={title} />;
});
