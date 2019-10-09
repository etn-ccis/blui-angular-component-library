# Typography
Typography components are used to render text on the screen. This library provides several helper components that automatically apply various styles from the theme to avoid repeated custom styling throughout an application.

<img width="20%" alt="Typography Elements" src="./images/typography.png">

We provide components for:
- ```<Heading>```
- ```<Subheading>```
- ```<Title>```
- ```<Subtitle>```
- ```<Label>```
- ```<Body>```

### Usage
```
import { Subtitle, Title, Label, Heading, Subheading, Body } from '@pxblue/react-native-components';
...
<View>
    <Heading>This is a Heading</Heading>
    <Subheading>This is a Subheading</Subheading>
    <Title>This is a Title</Title>
    <Subtitle>This is a Subtitle</Subtitle>
    <Label>This is a Label</Label>
    <Body>This is Body</Body>
</View>
```

### API
All typography components in this library share a common API.

| Prop Name | Description                             | Type                                                                      | Required | Default | Examples                      |
|-----------|-----------------------------------------|---------------------------------------------------------------------------|----------|---------|-------------------------------|
| font      | The font style (from the theme)         | 'bold' &vert; 'regular' &vert; 'medium' &vert; 'light' &vert; 'thin'      | no       |         | 'bold'                        |
| fontSize  | The font size (from the theme)          | 'small' &vert; 'medium' &vert; 'large' &vert; 'extraLarge'                | no       |         | 'large'                       |
| color     | The font color (from theme palette)     | 'primary' &vert; 'accent' &vert; 'error' &vert; 'text' &vert; 'onPrimary' | no       | 'text'  | 'primary'                     |
| theme     | Theme partial for default styling       | `DeepPartial<Theme>`                                                      | no       |         | { colors: { text: 'green' } } |