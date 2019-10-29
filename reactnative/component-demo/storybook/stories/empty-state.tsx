import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { EmptyState, wrapIcon } from '@pxblue/react-native-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Clock = wrapIcon({ IconClass: Icon, name: 'clock-outline' });
import { text, withKnobs } from '@storybook/addon-knobs';
import { ImageBackground } from 'react-native';
import {Button, Icon as RNEIcon} from 'react-native-elements';

//@ts-ignore
import * as Colors from '@pxblue/colors';

storiesOf('EmptyState', module)
   .addDecorator(withKnobs)
   .add('basic usage', () => (
      <EmptyState
         // icon={<Icon name="notifications" size={100} color={Colors.gray[500]} />}
         IconClass={Clock} 
         title={text('title', 'No Alarms Found')}
      />
   ))
   .add('with actions', () => (
      <EmptyState
         IconClass={Clock} 
         title={text('title', 'No Alarms Found')}
         actions={
            <Button
               icon={<RNEIcon name="add-circle-outline" color={Colors.white[500]} containerStyle={{marginRight: 5}} />}
               title={text('button title', 'Add Alarm')}
            />
         }
      />
   ))
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
            IconClass={Clock} 
            title={text('title', 'Alarms Page Coming Soon')}
            description={text('description', 'A fully redesigned alarms page is coming in our next release!')}
            actions={ <Button title={text('button title', 'Learn More')} type={'outline'} /> }
         />
      </ImageBackground>
   ));
