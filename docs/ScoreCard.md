# ScoreCard
Card component that calls attention to particular values.

<div style="align-items: center; text-align: center; width: 100%; display: flex; justify-content: space-evenly; margin-bottom: 20px">
    <img width="40%" alt="Score Card with multiple highlighted values" src="./images/scoreCard.png"><br/>
    <img width="40%" alt="Score Card with single badge-style value" src="./images/scoreCard_alt.png"><br/>
</div>

## Usage

<div style="align-items: center; text-align: center; width: 100%; display: flex; justify-content: space-evenly; margin-bottom: 20px">
    <img width="80%" alt="Score Card with labels on different parts" src="./images/scoreCardAnatomy.png"><br/>
</div>

```typescript
import { Hero, HeroBanner, ScoreCard } from '@pxblue/react-components';
import { List, Card, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { MoreVert } from '@material-ui/icons';
import { Temp } from '@pxblue/icons-mui';

...
<ScoreCard
    headerColor={Colors.red[500]}
    headerTitle={'Substation 3'}
    headerFontColor={Colors.white[50]}
    actionItems={[
        <MoreVert onClick={() => {}} />,
    ]}
    badge={
        <HeroBanner>
            <Hero
                icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
                label={'Temperature'}
                iconSize={48}
                value={98}
                units={'°F'}
                fontSize={'normal'}
            />
        </HeroBanner>
    }
    actionRow={
        <List>
            <ListItem>
                <ListItemText primary="View Location" />
                <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
            </ListItem>
        </List>
    }
>
    {/* Card Body Content */}
</ScoreCard>
```

## API

<div style="overflow: auto;">

| Prop Name             | Description                                 | Type                  | Required | Default                      |
|-----------------------|---------------------------------------------|-----------------------|----------|------------------------------|
| actionItems           | Icons to show to the right of the text      | `JSX.Element[]`       | no       |                              |
| actionLimit           | Max number of actionItems in the header     | `number`              | no       | 3                            |  
| actionRow             | Component to render for the footer          | `React.Component`     | no       |                              |
| badge                 | The component to render in the callout area | `React.Component`     | no       |                              |
| badgeOffset           | Vertical offset for the badge component     | `number`              | no       |                              |
| classes               | Style overrides                             | `StyleRules`          | no       |                              |     
| headerBackgroundImage | An image to display in the header           | `string`              | no       |                              | 
| headerColor           | The color of the header                     | `string`              | no       | `theme.palette.primary.main` |
| headerFontColor       | The color for text and icons in header      | `string`              | no       | `white`                      | 
| headerInfo            | Tertiary text                               | `string`              | no       |                              |
| headerTitle           | The primary text                            | `string`              | yes      |                              |
| headerSubtitle        | The secondary text                          | `string`              | no       |                              | 

</div>

The `ScoreCard` also extends all Material UI Card props.


### Classes
You can override the classes used by PX Blue by passing a `classes` prop. It supports the following keys:

| Name             | Description                                              |
|------------------|----------------------------------------------------------|
| root             | Styles applied to the root element                       |
| actionItems      | Styles applied to the action items container             |
| badgeWrapper     | Styles applied to the badge container                    |
| bodyWrapper      | Styles applied to the child nodes container              |
| content          | Styles applied to justify all body content               |
| header           | Styles applied to the header container                   |
| headerBackground | Styles applied to header background image                |
| headerContent    | Styles applied to the header text and actions container  |
| headerInfo       | Styles applied to the tertiary text element              |
| headerTitle      | Styles applied to the title element                      |
| headerSubtitle   | Styles applied to the subtitle element                   |
