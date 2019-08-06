# ScoreCard

## Example
```
const backgroundImage = require('../assets/farm.jpg');

<ScoreCard
  headerText={['title', 'subtitle 1', 'subtitle 2]}
  headerBackgroundImage={backgroundImage}
  actionItems={[
    { icon: 'add', onPress: () => console.log('add pressed) },
    { icon: 'autorenew', onPress: () => console.log('autorenew pressed') }
  ]}
  onPressOverflow={() => console.log('overflow pressed!')}
  badge={
    <Hero
      label={'Overall Score'}
      value={85}
      units={'/100'}
      icon={<GradeA width={48} height={48} fill={'orange'} />}
    />
  }
  actionRow={<ScoreCard.ListItem label={'View Location'} onPress={() => {}} />}
>
  <Text style={{ color: 'red' }}>Variable number of actions</Text>
  <Text style={{ color: 'blue' }}>With overflow handler for when actionItems.length > 3</Text>
</ScoreCard>
```

## Props
| Name                  | Type                                         | Required | Default  | Examples                                                                                          | Notes                                                              |
|-----------------------|----------------------------------------------|----------|----------|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| headerText            | string &vert; Array&lt;string&gt;            | yes      |          | 'My Title', ['title', 'subtitle']                                                                 | If an array is used, only up to 3 strings will be shown            |
| headerColor           | string                                       | no       | red[700] | 'green', '#112233'                                                                                |                                                                    |
| badge                 | JSX.Element                                  | no       |          | &lt;Hero ... /&gt;                                                                                | This *SHOULD* be an instance of the Hero component                 |
| actionRow             | JSX.Element                                  | no       |          | &lt;ScoreCard.ListItem label="view location" onPress={() => console.log('viewing location') /&gt; |                                                                    |
| headerBackgroundImage | ImageSourcePropType                          | no       |          | require('../assets/farm.jpg')                                                                     |                                                                    |
| actionItems           | Array<{ icon: string, onPress: () => void }> | no       |          | [{ icon: 'autorenew', onPress: () => console.log('refreshing data') }]                            | The icon string should correspond to a MaterialIcon name           |
| onPressOverflow       | () => void                                   | no       |          | console.log('open a bottom sheet to show menu')                                                   | Overflow icon will only be shown if no actionItems, or more than 2 |

## ScoreCard.ListItem

This is a basic component to be used as the default actionRow

### Example

<ScoreCard.ListItem label={'View Location'} onPress={() => {}} />

### Props
| Name                  | Type                                         | Required | Default  | Examples                                                                                          
|-----------------------|----------------------------------------------|----------|----------|---------------------------------------------------------------------------------------------------|
| label                 | string                                       | yes      |          | 'View Location'                                                                                   |
| onPress               | () => void                                   | no       |          | () => myFunction()                                                                                |
