import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, StyleSheet } from 'react-native';
import { text, withKnobs } from '@storybook/addon-knobs';
import Leaf from '@pxblue/icons-svg/leaf.svg';
import { safeArea } from '../decorators';
import { CollapsibleSection } from '@pxblue/react-native-components';
import { red, gray, blue } from '@pxblue/colors';

storiesOf('CollapsibleSection', module)
  .addDecorator(withKnobs)
  .addDecorator(safeArea)
  .add('With a big icon', () => (
    <View style={{ height: '100%', paddingVertical: 10, backgroundColor: gray[100] }}>
      <CollapsibleSection title={text('title', 'Section Title Here')}>
        <View style={styles.contentContainer}>
          <Leaf fill={red[700]} width={128} height={128} />
        </View>
      </CollapsibleSection>
      <CollapsibleSection title={'Here\'s Another Section'} startOpen={false}>
        <View style={styles.contentContainer}>
          <Leaf fill={blue[700]} width={128} height={128} />
        </View>
      </CollapsibleSection>
    </View>
  ));

const styles = StyleSheet.create({
  contentContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})