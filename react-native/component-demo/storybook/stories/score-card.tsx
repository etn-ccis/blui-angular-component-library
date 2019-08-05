import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ScoreCard, Hero } from '@pxblue/react-native-components';
import { safeArea, centered, padded } from '../decorators';
import GradeA from '@pxblue/icons-svg/grade_a.svg';
import GradeB from '@pxblue/icons-svg/grade_b.svg';

storiesOf('ScoreCard', module)
  .addDecorator(withKnobs)
  .addDecorator(padded)
  .add('with arbitrary children', () =>
    <ScoreCard headerText={'Portland Datacenter'}>
      <Text style={{ color: 'red' }}>2 Alarms</Text>
      <Text style={{ color: 'blue' }}>2 Events</Text>
      <Text style={{ color: 'orange' }}>2 Predictions</Text>
    </ScoreCard>
  )
  .add('with multiple header lines', () =>
    <ScoreCard headerText={['Portland Datacenter', '6 UPS Devices', 'Attention Required']}>
      <Text style={{ color: 'red' }}>2 Alarms</Text>
      <Text style={{ color: 'blue' }}>2 Events</Text>
      <Text style={{ color: 'orange' }}>2 Predictions</Text>
    </ScoreCard>
  )
  .add('with a badge and actionRow', () =>
    <ScoreCard
      headerText={'With a header'}
      badge={
        <Hero
          label={'Overall Score'}
          value={85}
          units={'/100'}
          icon={<GradeA width={48} height={48} fill={'orange'} />}
        />
      }
      actionRow={
        <ScoreCard.ListItem label={'View Location'} onPress={() => {}} />
      }
    >
      <Text style={{ color: 'red' }}>2 Alarms</Text>
      <Text style={{ color: 'blue' }}>2 Events</Text>
      <Text style={{ color: 'orange' }}>2 Predictions</Text>
    </ScoreCard>
  );
