import React, { Component, Fragment } from 'react';
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
    const { smallText, withGrayText } = styles;

    if (typeof subtitle === 'string') {
      return (
        <Text style={[smallText, withGrayText]}>{subtitle}</Text>
      );
    } else if (subtitle !== undefined) {
      return this.separate(subtitle.map(element =>
        (typeof element) === 'string'
          ? <Text style={[smallText, withGrayText]}>{element}</Text>
          : element
      ));
    }
  }

  private separate(array: Array<React.ReactNode>) {
    const output: Array<React.ReactNode> = [];

    array.forEach(element => {
      if (output.length) {
        output.push(this.interpunct(output.length));
      }

      output.push(<Fragment key={output.length}>{element}</Fragment>);
    })
    
    return output;
  }

  private interpunct(key: number) {
    const { bold, withGrayText, withSmallMargins } = styles;
    return (
      <Text key={key} style={[bold, withGrayText, withSmallMargins]}>
        {'\u00B7'}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bold: {
    fontWeight: '900'
  },
  bigText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24
  },
  smallText: {
    fontSize: 13
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
  withSmallMargins: {
    marginHorizontal: 4
  },
  fullHeight: {
    height: '100%'
  },
  fixedHeight: {
    height: 72
  },
  withGrayText: {
    color: Colors.gray[600]
  }
});
