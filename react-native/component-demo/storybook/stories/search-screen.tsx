import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SearchScreen } from '@pxblue/react-native-components';
import { View } from 'react-native';
import { blue, green } from '@pxblue/colors';
import Flow from '@pxblue/icons-svg/flow.svg';
import Apple from '@pxblue/icons-svg/apple.svg';
import { InfoListItemProps } from '@pxblue/react-native-components/dist/info-list-item/info-list-item';
import * as _ from 'lodash';
import faker from 'faker';

const Separator: React.FunctionComponent = () =>
  <View style={{ height: 1, marginLeft: 40, backgroundColor: '#cccccc' }} />;

const createInfoListItemProps = (): InfoListItemProps => {
  let subtitle: InfoListItemProps['subtitle'];
  let color: InfoListItemProps['color'];
  let icon: InfoListItemProps['icon'];
  let onPress: InfoListItemProps['onPress'];

  const subtitleNumber = Math.random();
  if (subtitleNumber < 0.3) {
    subtitle = faker.lorem.sentence();
  } else if (subtitleNumber < 0.6) {
    subtitle = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()];
  } else if (subtitleNumber < 0.9) {
    subtitle = [<Flow width={12} height={12} fill={blue[300]} />, 'GPM'];
  }

  const colorNumber = Math.random();
  if (colorNumber < 0.35) {
    color = green[700];
  } else if (colorNumber < 0.7) {
    color = blue[700];
  }

  if (Math.random() < 0.7) {
    icon = <Apple width={24} height={24} fill={color || blue[700]} />;
  }

  if (Math.random() < 0.5) {
    onPress = () => {};
  }

  return {
    title: faker.lorem.word(),
    subtitle,
    color,
    icon,
    onPress
  }
};

const data: Array<InfoListItemProps> = _.range(100).map(createInfoListItemProps);

storiesOf('Search Screen', module)
  .add('with all props', () => (
    <SearchScreen
      data={data}
    />
  ));
