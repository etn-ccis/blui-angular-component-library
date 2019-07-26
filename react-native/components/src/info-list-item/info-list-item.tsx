import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Colors from '@pxblue/colors';

export interface InfoListItemProps {
  title: string;
  subtitle?: string | Array<React.ReactNode>;
  icon?: React.ReactNode;
  color?: string;
  onPress?: () => void;
}

export class InfoListItem extends Component<InfoListItemProps> {
  public render() {
    const { title, icon, color, onPress } = this.props;
    const { bigText, fixedHeight, row, fullHeight, tab, iconContainer, contentContainer, withMargins } = styles;
    const titleColor = color || Colors.gray[800];

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[fixedHeight, row]}>
          <View style={[fullHeight, tab, { backgroundColor: color }]} />
          <View style={[iconContainer, withMargins]}>
            {icon}
          </View>
          <View style={contentContainer}>
            <Text style={[bigText, { color: titleColor }]}>{title}</Text>
            <View style={row}>
              {this.subtitle()}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  private subtitle() {
    const { subtitle } = this.props;
    const { withGrayText } = styles;

    return (
      <Text style={withGrayText}>{subtitle}</Text>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bigText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24
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
  },
  withGrayText: {
    color: Colors.gray[700]
  }
});
