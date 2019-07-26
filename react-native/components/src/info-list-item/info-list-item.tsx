import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export interface InfoListItemProps {
  title: string;
  subtitle?: string | Array<React.ReactNode>;
  icon?: React.ReactNode;
  tabColor?: string;
  onPress?: () => void;
}

export class InfoListItem extends Component<InfoListItemProps> {
  public render() {
    const { title, icon, tabColor, onPress } = this.props;
    const { fixedHeight, row, fullHeight, tab, iconContainer, contentContainer, withMargins } = styles;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[fixedHeight, row]}>
          <View style={[fullHeight, tab, { backgroundColor: tabColor }]} />
          <View style={[iconContainer, withMargins]}>
            {icon}
          </View>
          <View style={contentContainer}>
            <Text>{title}</Text>
            <View style={styles.row}>
              {this.subtitle()}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  private subtitle() {
    const { subtitle } = this.props;

    return (
      <Text>{subtitle}</Text>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {

  },
  contentContainer: {

  },
  tab: {
    width: 6
  },
  withMargins: {
    marginHorizontal: 12
  },
  fullHeight: {
    height: '100%'
  },
  fixedHeight: {
    height: 72
  }
});
