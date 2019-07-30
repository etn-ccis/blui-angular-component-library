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

| Name      | Type    | Required | Default | Examples    |
|-----------|---------|----------|---------|-------------|
| title     | string  | yes      |         | 'Any Text'  |
| startOpen | boolean | no       | true    | true, false |
