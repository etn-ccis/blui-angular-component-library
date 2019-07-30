# Collapsible Section

This component provides a header and a collapsible content section.

## Example
```
<CollapsibleSection title={'Section Title Here'}>
  <View style={{ }}>
    <Text>Your content here!</Text>
  </View>
</CollapsibleSection>
```

Note: Child components will be the content to collapse/expand

## Props

| Name      | Type                                              | Required | Default                                                   | Examples                                            |
|-----------|---------------------------------------------------|----------|-----------------------------------------------------------|-----------------------------------------------------|
| title     | string                                            | yes      |                                                           | 'Any Text'                                          |
| startOpen | boolean                                           | no       | true                                                      | true, false                                         |
| disabled  | boolean                                           | no       | false                                                     | true, false                                         |
| style     | { titleColor?: string, backgroundColor?: string } | no       | { titleColor: blue[700], backgroundColor: 'transparent' } | { titleColor: 'red' }, { backgroundColor: 'white' } |
