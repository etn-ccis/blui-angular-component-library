# BucketView

A component to handle grouping related data together and rendering them as a list in CollapsibleSections.

<img alt="Sample BucketView" src="./images/bucket-view.png">

## Examples

### Sorting labels using `compareGroupLabels`

Allows groups to be sorted automatically. This is useful when there are a large number of groups, or when the group labels are not known ahead of time.

```
<BucketView
  data={[{ name: 'Device A', status: 'started', date: new Date('2019-03-21') } /* ... */]}
  getGroupLabel={device => device.name}
  compareGroupLabels={(a, b) => a.localeCompare(b)}
  renderItem={device => <InfoListItem title={device.name} />}
  ItemSeparatorComponent={Separator}
/>
```

### Sorting labels using `labels`

Allows explicitly defining the order of group labels to be shown. This is useful when there are a small number of known group labels.

```
<BucketView
  data={[{ name: 'Device A', status: 'started', date: new Date('2019-03-21') } /* ... */]}
  getGroupLabel={device => device.name}
  labels={['Device A', 'Device B']}
  renderItem={device => <InfoListItem title={device.name} />}
  ItemSeparatorComponent={Separator}
/>
```

## Props

| Name                   | Type                                    | Required | Default | Examples                                               | Notes                                                                                  |
|------------------------|-----------------------------------------|----------|---------|--------------------------------------------------------|----------------------------------------------------------------------------------------|
| data                   | Array&lt;T&gt;                                | yes      |         | [{ value: 'a', count: 1 }, { value: 'b', count: 100 }] |                                                                                        |
| renderIcon             | (data: T) =&gt; JSX.Element                | yes      |         | data =&gt; &lt;InfoListItem title={data.value} /&gt;   |                                                                                        |
| getGroupLabel          | (data: T) =&gt; string                     | yes      |         | data =&gt; data.count &lt; 50 ? 'small' : 'large'         |                                                                                        |
| groupLabels            | Array&lt;string&gt;                           | no       |         | ['small', 'large']                                     | If present, groups will be shown in the order they appear in this array                |
| compareGroupLabels     | (a: string, b: string) =&gt; number        | no       |         | (a, b) =&gt; a.value.compareTo(b.value)                | If present and `groupLabels` is not, this will be used to sort the group labels shown  |
| compareData            | (a: T, b: T) =&gt; number                  | no       |         | (a, b) =&gt; a.count - b.count                         | Determines sorting within each group                                                   |
| style                  | StyleProp&lt;ViewStyle&gt;                    | no       |         | { padding: 10, backgroundColor: green[200] }           | A style applied to the top-level child component                                       |
| ItemSeparatorComponent | FunctionComponent &vert; ComponentClass | no       |         | () =&gt; &lt;View /&gt;                                | An optional separator component to be rendered between items in the CollapsibleSection |
