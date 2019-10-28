import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { EmptyState } from '@pxblue/react-native-components';
import { text, withKnobs } from '@storybook/addon-knobs';
import {
   StyleSheet,
   ImageBackground,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
//@ts-ignore
import * as Colors from '@pxblue/colors';

storiesOf('EmptyState', module)
   .addDecorator(withKnobs)
   .add('text only', () => (
      <EmptyState
         icon={<Icon name="notifications" size={100} color={Colors.gray[500]} />}
         title={text('title', 'No Alarms Found')}
      />
   ), {})
   .add('actions', () => (
      <EmptyState
         icon={<Icon name="devices" size={100} color={Colors.gray[500]} />}
         title={text('title', 'No Alarms Found')}
         actions={
            <Button
               icon={<Icon name="add-circle-outline" color={Colors.white[500]} />}
               title={text('button title', 'Add Device')}
            />
         }
      />
   ), {})
   .add('placeholder', () => (
      <ImageBackground
         source={{
            uri:
               'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
         }}
         style={{ flex: 1, padding: 20 }}
         imageStyle={{ opacity: .2}}
      >
         <EmptyState
            icon={
               <Icon name="trending-up" size={100} color={Colors.gray[500]} />
            }
            title={text('title', 'Predictions Page Coming Soon')}
            description={text('description', 'A fully redesigned predictions page is coming in our next release!')}
            actions={ <Button title={text('button title', 'LEARN MORE')} type={'outline'} /> }
         />
      </ImageBackground>
   ), {});
