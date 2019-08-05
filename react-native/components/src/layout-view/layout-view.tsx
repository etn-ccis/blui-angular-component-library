import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface LayoutViewProps {
  /** Element to render as header of the screen */
  header?: React.ReactElement;

  /** Element to render as footer of the screen */
  footer?: React.ReactElement;

  /** Background color for the header, footer, and content */
  backgroundColor?: string;

  /** Controls whether content renders in a KeyboardAwareScrollView or a View */
  needsKeyboard?: boolean;

  /** ScrollView prop that determines whether the ScrollView can bounce on iOS */
  bounces?: boolean;
}

/**
 * LayoutView component
 *
 * Used to render content with an optional header and footer.
 */
export class LayoutView extends React.Component<LayoutViewProps> {
  render() {
    return (
      <View style={{height: '100%'}}>
        {this.header()}
        {this.content()}
        {this.footer()}
      </View>
    )
  }

  private header() {
    if (this.props.header) {
      return this.props.header;
    } else {
      return <SafeAreaView style={{backgroundColor: this.backgroundColor()}} testID={'layout-default-header'}/>;
    }
  }

  private content() {
    const { needsKeyboard, bounces = true, children } = this.props;
    if (needsKeyboard) {
      return (
        <KeyboardAwareScrollView
          bounces={bounces}
          enableOnAndroid={true}
          style={{flex: 1, backgroundColor: this.backgroundColor()}}
        >
          {children}
        </KeyboardAwareScrollView>
      );
    } else {
      return (
        <View style={{flex: 1, backgroundColor: this.backgroundColor()}}>
          {children}
        </View>
      );
    }
  }

  private footer() {
    if (this.props.footer) {
      return this.props.footer;
    } else {
      return <SafeAreaView style={{backgroundColor: this.backgroundColor()}} testID={'layout-default-footer'}/>
    }
  }

  private backgroundColor() {
    return this.props.backgroundColor ? this.props.backgroundColor : 'transparent';
  }
}
