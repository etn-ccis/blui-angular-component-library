# InfoListItem

Component to be used in list views. It positions a title, as well as optional subtitles, icons, and tab on side.

## Example
```
<InfoListItem
  title={text('title', 'Test')}
  icon={<Leaf fill="#9944cc" width={24} height={24} />}
  subtitle={text('subtitle', 'the subtitle can be text or a list of elements')}
  color={color('tabColor', '#4455cc')}
/>
```

## Props

| Name     | Type            | Required | Default | Examples           |
|----------|-----------------|----------|---------|--------------------|
| value    | string | number | yes      |         | 123, 'on'          |
| icon     | React.ReactNode | no       |         | <MyIcon />         |
| units    | string          | no       |         | 'hz', '$'          |
| prefix   | boolean         | no       | false   | true, false        |
| fontSize | number          | no       | 20      | 12, 30             |
| color    | string          | no       | 'black' | 'black', '#000000' |
