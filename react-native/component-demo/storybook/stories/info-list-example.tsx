import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { InfoListItem } from '@pxblue/react-native-components';
import { FlatList, View } from 'react-native';

interface InfoListItemProps {
  title: string;
  subtitle?: string | Array<React.ReactNode>;
  color?: string;
}

const randomSubtitle = () => {
  const number = Math.random();

  if (number < 0.2) {
    return undefined;
  } else if (number < 0.5) {
    return 'string subtitle';
  } else if (number < 0.8) {
    return [`${Math.floor(Math.random() * 100)}`, 'Hz'];
  } else {
    return [`${Math.floor(Math.random() * 100)}`, 'mL', 'GPM'];
  }
}

const getColor = (index: number) => {
  switch (index % 8) {
    case 0: return 'red';
    case 1: return 'orange';
    case 2: return 'yellow';
    case 3: return 'green';
    case 4: return 'blue';
    case 5: return 'purple';
    default: return undefined;
  }
}

const data: Array<InfoListItemProps> =
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((x, index) => ({
    title: `Title ${x}`,
    subtitle: randomSubtitle(),
    color: getColor(index)
  }));

storiesOf('InfoListItem Example', module)
  .add('in FlatList', () => (
    <FlatList<InfoListItemProps>
      data={data}
      style={{ height: '100%', flex: 1000 }}
      renderItem={({ item, index }) => (
        <InfoListItem title={`${item.title}`} subtitle={item.subtitle} key={`${index}`} color={item.color} />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 1, marginLeft: 40, backgroundColor: 'grey' }} />}
    />
  ));