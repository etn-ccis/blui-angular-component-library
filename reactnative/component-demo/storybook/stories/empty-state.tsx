import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {ChannelValue, EmptyState} from '@pxblue/react-native-components';
import { text, withKnobs } from '@storybook/addon-knobs';
import {
   Text,
   View,
   StyleSheet,
   ScrollView,
   ImageBackground,
} from 'react-native';
import {Button, Card, Icon} from 'react-native-elements';
//@ts-ignore
import * as Colors from '@pxblue/colors';

const actionNotes = {

};
const placeholderNotes = {

};
const subcontentNotes = {

};
const textOnlyNotes = {

};

const devices = [
   {
      name: 'Device 101',
   },
   {
      name: 'Device 201',
      performance: 'Poor',
      batteryLife: '20%',
   },
   {
      name: 'Device 202',
      performance: 'Average',
      batteryLife: '15%',
   },
   {
      name: 'Device 203',
      performance: 'Excellent',
      batteryLife: '96%',
   },
];

storiesOf('EmptyState', module)
   .addDecorator(withKnobs)
   .add('text only', () => (
      <EmptyState
         icon={<Icon name="notifications" size={100} color={Colors.gray[500]} />}
         title={text('title', 'No Alarms Found')}
      />
   ), textOnlyNotes)
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
   ), actionNotes)
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
   ), placeholderNotes)
   .add('subcontent', () => (
      <ScrollView style={{flex: 1}} contentContainerStyle={{padding: 20}}>
         {devices.map((device, index) => (
            <Card
               key={index}
               containerStyle={StyleSheet.flatten([styles.card, index === devices.length - 1 ? {marginBottom: 0} : {}])}
               title={device.name}
               titleStyle={StyleSheet.flatten([styles.title, {backgroundColor: device.performance ? Colors.blue[500] : Colors.orange[500]}])}
               dividerStyle={{marginBottom: 0}}>
               {device.performance ? (
                  <View>
                     <View style={styles.row}>
                        <Text style={styles.text}>Performance</Text>
                        <Text style={styles.text}>{device.performance}</Text>
                     </View>
                     <View style={styles.row}>
                        <Text style={styles.text}>Battery Life</Text>
                        <Text style={styles.text}>{device.batteryLife}</Text>
                     </View>
                     <View style={styles.actions}>
                        <Button title="REPORT" type="clear" />
                        <Button title="LEARN MORE" type="clear" />
                     </View>
                  </View>
               ) : (
                  <EmptyState
                     icon={
                        <Icon name="devices" size={100} color={Colors.gray[500]} />
                     }
                     title={text('title', 'No Data')}
                  />
               )}
            </Card>
         ))}
      </ScrollView>
   ), subcontentNotes);

const styles = StyleSheet.create({
   card: {
      padding: 0,
      margin: 0,
      marginBottom: 20
   },
   title: {
      color: Colors.white[50],
      textAlign: 'left',
      marginBottom: 0,
      height: 40,
      padding: 10,
   },
   row: {
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10
   },
   actions:{
      flexDirection: 'row',
      justifyContent: 'center'
   },
   text: {
      color: Colors.gray[500],
      fontSize: 14,
      fontWeight: '400',
   }
});
