import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { text, withKnobs, number } from '@storybook/addon-knobs';
import { ScoreCard, Hero } from '@pxblue/react-native-components';
import { padded } from '../decorators';
import GradeA from '@pxblue/icons-svg/grade_a.svg';

const backgroundImage = require('../assets/farm.jpg');

storiesOf('ScoreCard', module)
  .addDecorator(withKnobs)
  .addDecorator(padded)
  .add('with minimal configuration', () =>
    <ScoreCard headerText={'Portland Datacenter'}>
      <Text style={{ color: 'red' }}>2 Alarms</Text>
      <Text style={{ color: 'blue' }}>2 Events</Text>
      <Text style={{ color: 'orange' }}>2 Predictions</Text>
    </ScoreCard>
  )
  .add('with background and actions', () =>
    <ScoreCard
      headerText={['Portland Datacenter', '6 UPS Devices', 'Attention Required']}
      headerBackgroundImage={backgroundImage}
      actionItems={[
        { icon: 'add', onPress: () => {} },
        { icon: 'autorenew', onPress: () => {} },
        { icon: 'autorenew', onPress: () => {} }
      ].slice(0, number('actionItems.length', 2, { range: true, min: 0, max: 3, step: 1}))}
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
      <Text style={{ color: 'red' }}>Variable number of actions</Text>
      <Text style={{ color: 'blue' }}>No overflow handler</Text>
    </ScoreCard>
  )
  .add('with background and actions and onPressOverflow', () =>
    <ScoreCard
      headerText={['Portland Datacenter', '6 UPS Devices', 'Attention Required']}
      headerBackgroundImage={backgroundImage}
      actionItems={[
        { icon: 'add', onPress: () => {} },
        { icon: 'autorenew', onPress: () => {} },
        { icon: 'autorenew', onPress: () => {} }
      ].slice(0, number('actionItems.length', 2, { range: true, min: 0, max: 3, step: 1}))}
      onPressOverflow={() => {}}
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
      <Text style={{ color: 'red' }}>Variable number of actions</Text>
      <Text style={{ color: 'blue' }}>With overflow handler for when actionItems.length > 3</Text>
    </ScoreCard>
  )
  .add('with overflow', () =>
    <ScoreCard
      headerText={['Portland Datacenter', '6 UPS Devices', 'Attention Required']}
      headerBackgroundImage={backgroundImage}
      onPressOverflow={() => {}}
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
  )
  .add('with really long text', () =>
    <ScoreCard
      headerText={[
        text('headerText[0]', 'A really long title that should probably be truncated'),
        text('headerText[1]', 'A really long subtitle that should also be truncated'),
        text('headerText[2]', 'Another really long subtitle that should also be truncated')
      ]}
      headerBackgroundImage={backgroundImage}
      actionItems={[
        { icon: 'add', onPress: () => {} },
        { icon: 'autorenew', onPress: () => {} },
        { icon: 'autorenew', onPress: () => {} }
      ].slice(0, number('actionItems.length', 2, { range: true, min: 0, max: 3, step: 1}))}
      onPressOverflow={() => {}}
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
      <Text style={{ color: 'red' }}>Variable number of actions</Text>
      <Text style={{ color: 'blue' }}>With overflow handler for when actionItems.length > 3</Text>
    </ScoreCard>
  )
