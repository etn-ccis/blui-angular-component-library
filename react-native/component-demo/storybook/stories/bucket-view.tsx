import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { BucketView, InfoListItem } from '@pxblue/react-native-components';
import { text, withKnobs, boolean, number, color } from '@storybook/addon-knobs';
import { red, blue, gray, white } from '@pxblue/colors';

storiesOf('BucketView')
  .addDecorator(withKnobs)
  .add('with InfoListItems', () => {
    type Data = {
      name: string;
      status: string;
      dateAquired: Date;
    };
    const differenceInDays = (a: Date, b: Date) => (a.getTime() - b.getTime()) / 1000 / 3600 / 24;
    const today = new Date('2019-03-21');
    const getLabel = (data: Data) => {
      const diff = differenceInDays(today, data.dateAquired);
      if (diff > 31) {
        return 'Last Year';
      } else if (diff > 7) {
        return 'Last Month'
      } else {
        return 'Last Week'
      }
    }

    const devices = [
      { name: 'Device A', status: 'started', dateAquired: new Date('2019-03-21') },
      { name: 'Device B', status: 'stopped', dateAquired: new Date('2019-03-19') },
      { name: 'Device C', status: 'stopped', dateAquired: new Date('2019-01-01') },
      { name: 'Device D', status: 'started', dateAquired: new Date('2019-01-02') },
      { name: 'Device E', status: 'started', dateAquired: new Date('2019-02-01') },
      { name: 'Device F', status: 'stopped', dateAquired: new Date('2019-03-15') },
      { name: 'Device G', status: 'stopped', dateAquired: new Date('2019-03-11') }
    ];

    return (
      <BucketView
        data={devices}
        getLabel={getLabel}
        renderItem={device => (
          <View style={{ backgroundColor: white[100] }}>
            <InfoListItem
              title={device.name}
              subtitle={`aquired: ${device.dateAquired.toUTCString()}`}
              color={device.status === 'stopped' ? red[800] : blue[800]}
            />
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ borderBottomColor: white[900], borderBottomWidth: 1 }} />
        )}
        style={{
          flex: 1,
          backgroundColor: gray[100],
          padding: 10
        }}
      />
    );
  });
