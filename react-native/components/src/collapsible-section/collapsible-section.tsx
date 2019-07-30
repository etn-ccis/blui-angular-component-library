import React, { Component } from 'react';
import { StyleProp, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Collapsible from 'react-native-collapsible';
import { gray, blue } from '@pxblue/colors';

export interface CollapsibleSectionProps {
  title: string;
  startOpen?: boolean;
}

interface CollapsibleSectionState {
  collapsed: boolean;
}

export class CollapsibleSection extends Component<CollapsibleSectionProps, CollapsibleSectionState> {
  constructor(props: CollapsibleSectionProps) {
    super(props);

    this.state = {
      collapsed: props.startOpen === false
    };
  }

  public render() {
    const { title, children } = this.props;
    const { collapsed } = this.state;

    return (
      <View>
        <TouchableOpacity
          testID={'header'}
          style={{ flexDirection: 'row' }}
          onPress={() => this.setState({ collapsed: !collapsed })}
        >
          <View style={{ width: 72 }} />
          <View style={styles.headerRow} testID={'content'}>
            <Text style={styles.title}>{title}</Text>
            <MaterialIcon
              style={[collapsed ? styles.iconImageUp : styles.iconImageDown]}
              size={24}
              name={'apple-keyboard-control'}
              color={blue[700]}
            />
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={collapsed}>{children}</Collapsible>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerRow: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: gray[300]
  },
  title: {
    color: blue[700],
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 21,
    height: 20,
    flex: 1,
    left: -72
  },
  iconImageUp: {
    transform: [{ rotate: '0deg' }]
  },
  iconImageDown: {
    transform: [{ rotate: '180deg' }]
  }
});
