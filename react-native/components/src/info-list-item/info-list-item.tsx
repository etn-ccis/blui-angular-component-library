import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Colors from '@pxblue/colors';
import { interleave } from '../helpers/utils';

export interface InfoListItemProps {
  title: string;
  subtitle?: string | Array<React.ReactNode>;
  icon?: React.ReactNode;
  color?: string;
  onPress?: () => void;
}

export class InfoListItem extends Component<InfoListItemProps> {
  private static readonly MAX_SUBTITLE_ELEMENTS = 3;

  public render() {
    const { title, icon, color, onPress } = this.props;
    const { bigText, fixedHeight, row, fullHeight, tab, iconContainer, contentContainer, withMargins, withRightPadding } = styles;
    const titleColor = color || Colors.gray[800];

    return (
      <TouchableOpacity onPress={onPress} style={[fixedHeight, row, withRightPadding]} disabled={!onPress}>
        <View style={[fullHeight, tab, { backgroundColor: color }]} />
        <View style={[iconContainer, withMargins]}>
          {icon}
        </View>
        <View style={contentContainer}>
          <Text style={[bigText, { color: titleColor }]} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <View style={row}>
            {this.subtitle()}
          </View>
        </View>
        {this.chevron()}
      </TouchableOpacity>
    );
  }

  private chevron() {
    if (this.props.onPress) {
      return (
        <Icon name="chevron-right" size={24} color={Colors.gray[700]} />
      );
    }
  }

  private subtitle() {
    const { subtitle } = this.props;

    if (!subtitle) {
      return null;
    }

    const subtitleParts = Array.isArray(subtitle) ? [...subtitle] : [subtitle];
    const renderableSubtitleParts = subtitleParts
      .splice(0, InfoListItem.MAX_SUBTITLE_ELEMENTS)
      .map(element => this.renderableComponent(element));
    
    return this.withKeys(this.separate(renderableSubtitleParts));
  }

  private separate(array: Array<React.ReactNode>) {
    return interleave(array, () => this.interpunct());
  }

  private withKeys(array: Array<React.ReactNode>) {
    return array.map((element, index) => (
      <Fragment key={index}>{element}</Fragment>
    ))
  }

  private renderableComponent(element: React.ReactNode) {
    const { smallText, withGrayText } = styles;

    switch (typeof element) {
      case 'string':
      case 'number':
        return (
          <Text numberOfLines={1} style={[smallText, withGrayText]}>{`${element}`}</Text>
        );
      default:
        return element;
    }
  }

  private interpunct() {
    const { bold, withGrayText, withSmallMargins } = styles;
    return (
      <Text style={[bold, withGrayText, withSmallMargins]}>
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
  withRightPadding: {
    paddingRight: 6
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
    width: 24
  },
  contentContainer: {
    flex: 1,
    paddingRight: 10
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
