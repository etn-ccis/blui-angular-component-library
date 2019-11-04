//@ts-ignore
import React from 'react';
//@ts-ignore
import {action} from '@storybook/addon-actions';
//@ts-ignore
import EmptyState from '@pxblue/react-components/core/EmptyState';

import DevicesIcon from '@material-ui/icons/Devices'
import AddIcon from '@material-ui/icons/AddCircleOutlined'
import Button from '@material-ui/core/Button';
import AlertIcon from '@material-ui/icons/NotificationImportant';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import {text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

export const stories = storiesOf('Empty State', module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.add('Actions', () => {
    const title = text('Title', 'No Devices');
    const actionText = text('Action Text', 'Add Device');
    return <EmptyState
        icon={<DevicesIcon fontSize={'inherit'}/>}
        title={title}
        actions={
            <Button variant="contained" color="primary" style={{margin: '10px'}} onClick={action('Button Clicked')}>
                <AddIcon style={{marginRight: '5px'}}/>
                {actionText}
            </Button>
        }
    />
});

stories.add('Placeholder', () => {
    const title = text('Title', 'Predictions Page Coming Soon');
    const description = text('Description', 'A fully redesigned predictions page is coming in our next release!');
    const actionText = text('Action Text', 'Learn More');
    return <EmptyState
        icon={<TrendingUpIcon fontSize={'inherit'} style={{marginBottom: '0'}}/>}
        title={title}
        description={description}
        actions={<Button variant="outlined" size="small" color="primary"
                         style={{ margin: '10px'}}
                         onClick={action('Button Clicked')}>{actionText}</Button>}
    />;
});


stories.add('Text Only', () => {
    const title = text('Title', 'No Alarms Found');
    return <EmptyState
        icon={<AlertIcon fontSize={'inherit'}/>}
        title={title}
    />;
});