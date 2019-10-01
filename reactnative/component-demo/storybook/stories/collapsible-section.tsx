import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, StyleSheet } from 'react-native';
import { text, withKnobs, color } from '@storybook/addon-knobs';
import Leaf from '@pxblue/icons-svg/leaf.svg';
import { safeArea } from '../decorators';
import { CollapsibleSection } from '@pxblue/react-native-components';
import { red, blue } from '@pxblue/colors';

storiesOf('CollapsibleSection', module)
  .addDecorator(withKnobs)
  .addDecorator(safeArea)
  .add('With a big icon', () => (
    <View style={{ height: '100%', paddingVertical: 10 }}>
      <CollapsibleSection title={text('title', 'Section Title Here')}>
        <View style={styles.contentContainer}>
          <Leaf fill={red[700]} width={128} height={128} />
        </View>
      </CollapsibleSection>
      <CollapsibleSection
        title={'This One Has Custom Colors'} startOpen={false}
        style={{
          titleColor: color('styles.titleColor', red[900]),
          backgroundColor: color('styles.backgroundColor', red[100]),
        }}
      >
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
    alignItems: 'center'
  }
})