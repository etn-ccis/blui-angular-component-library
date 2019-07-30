import React, { Component } from 'react';
import { StyleProp, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Collapsible from 'react-native-collapsible';
import { gray, blue } from '@pxblue/colors';

export interface CollapsibleSectionProps {
  /** Title to show in heading */
  title: string;

  /** Whether or not the section starts open - defaults to true */
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
          <View style={[styles.headerContainer, styles.withBackground]}>
            <View style={[styles.headerRow, styles.withMargin]}>
              <Text style={styles.title}>{title}</Text>
              <MaterialIcon
                style={[collapsed ? styles.iconImageUp : styles.iconImageDown]}
                size={24}
                name={'apple-keyboard-control'}
                color={blue[700]}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={collapsed}>
          <View style={styles.withBackground}>
            <View style={[styles.divider, styles.withMargin]} />
          </View>
          {children}
        </Collapsible>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 56,
    flex: 1
  },
  headerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: gray[200]
  },
  withBackground: {
    backgroundColor: 'white'
  },
  withMargin: {
    marginLeft: 28,
    marginRight: 15
  },
  title: {
    color: blue[700],
    fontSize: 15,
    fontWeight: '600',
    height: 20,
    flex: 1,
  },
  iconImageUp: {
    transform: [
      { rotate: '0deg' },
      { translateY: 4 }
    ]
  },
  iconImageDown: {
    transform: [
      { rotate: '180deg' },
      { translateY: 2 }
    ]
  }
});
