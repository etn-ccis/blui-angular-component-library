import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StyleSheet, View } from 'react-native';
import { BucketView, InfoListItem } from '@pxblue/react-native-components';
import { withKnobs } from '@storybook/addon-knobs';
import { red, blue, gray, white } from '@pxblue/colors';

type Data = {
  name: string;
  status: string;
  dateAquired: Date;
};
const differenceInDays = (a: Date, b: Date) => (a.getTime() - b.getTime()) / 1000 / 3600 / 24;
const today = new Date('2019-03-21');
const getDateLabel = (data: Data) => {
  const diff = differenceInDays(today, data.dateAquired);
  if (diff > 31) {
    return 'Last Year';
  } else if (diff > 7) {
    return 'Last Month'
  } else {
    return 'Last Week'
  }
};

const devices = [
  { name: 'Device A', status: 'started', dateAquired: new Date('2019-03-21') },
  { name: 'Device A', status: 'stopped', dateAquired: new Date('2019-03-19') },
  { name: 'Device B', status: 'stopped', dateAquired: new Date('2019-01-01') },
  { name: 'Device B', status: 'started', dateAquired: new Date('2019-01-02') },
  { name: 'Device B', status: 'started', dateAquired: new Date('2019-02-01') },
  { name: 'Device C', status: 'stopped', dateAquired: new Date('2019-03-15') },
  { name: 'Device D', status: 'stopped', dateAquired: new Date('2019-03-11') }
];

const Separator = () => <View style={{ borderBottomColor: white[900], borderBottomWidth: 1 }} />;

storiesOf('BucketView')
  .addDecorator(withKnobs)
  .add('Sorted by labeled date spans', () => (
    <BucketView
      data={devices}
      getGroupLabel={getDateLabel}
      groupLabels={['Last Week', 'Last Month', 'Last Year']}
      renderItem={device => (
        <InfoListItem
          title={device.name}
          subtitle={`aquired: ${device.dateAquired.toUTCString()}`}
          backgroundColor={white[100]}
          color={device.status === 'stopped' ? red[800] : blue[800]}
        />
      )}
      ItemSeparatorComponent={Separator}
      style={styles.style}
    />
  ))
  .add('Sorted by device names', () => (
    <BucketView
      data={devices}
      getGroupLabel={device => device.name}
      compareGroupLabels={(a, b) => a.localeCompare(b)}
      renderItem={device => (
        <View style={{ backgroundColor: white[100] }}>
          <InfoListItem
            title={device.name}
            subtitle={`aquired: ${device.dateAquired.toUTCString()}`}
            color={device.status === 'stopped' ? red[800] : blue[800]}
          />
        </View>
      )}
      ItemSeparatorComponent={Separator}
      style={styles.style}
    />
  ));

const styles = StyleSheet.create({
  style: {
    flex: 1,
    backgroundColor: gray[100],
    padding: 10
  }
});
