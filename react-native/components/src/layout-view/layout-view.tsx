import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
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
}

/**
 * LayoutView component
 *
 * Used to render content with an optional header and footer.
 */
export class LayoutView extends React.Component<LayoutViewProps> {
  private BACKGROUND_COLOR = this.props.backgroundColor ? this.props.backgroundColor : 'transparent';

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
      return <SafeAreaView style={{backgroundColor: this.BACKGROUND_COLOR}} testID={'layout-default-header'}/>;
    }
  }

  private content() {
    const { needsKeyboard, children } = this.props;
    if (needsKeyboard) {
      return (
        <KeyboardAwareScrollView
          // bounces={false}
          enableOnAndroid={true}
          // enableAutomaticScroll={false}
          // enableResetScrollToCoords={false}
          style={{flex: 1, backgroundColor: this.BACKGROUND_COLOR}}
        >
          {children}
        </KeyboardAwareScrollView>
      );
    } else {
      return (
        <View style={{flex: 1, backgroundColor: this.BACKGROUND_COLOR}}>
          {children}
        </View>
      );
    }
  }

  private footer() {
    if (this.props.footer) {
      return this.props.footer;
    } else {
      return <SafeAreaView style={{backgroundColor: this.BACKGROUND_COLOR}} testID={'layout-default-footer'}/>
    }
  }
}

const styles = StyleSheet.create({
  shadow: {

  }
});
