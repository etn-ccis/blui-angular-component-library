import React, { Fragment } from 'react';
import { SafeAreaView } from 'react-native';

export interface LayoutViewProps {
  /** Element to render as header of the screen */
  header?: React.ReactElement;

  /** Element to render as footer of the screen */
  footer?: React.ReactElement;

  /** Background color for the header, footer, and content */
  backgroundColor?: string;
}

/**
 * LayoutView component
 *
 * Used to render content with an optional header and footer.
 */
export class LayoutView extends React.Component<LayoutViewProps> {
  private BACKGROUND_COLOR = this.props.backgroundColor ? this.props.backgroundColor : 'transparent';

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        {this.header()}
        <SafeAreaView style={{flex: 1, backgroundColor: this.BACKGROUND_COLOR}}>
          {children}
        </SafeAreaView>
        {this.footer()}
      </Fragment>
    )
  }

  private header() {
    if (this.props.header) {
      return this.props.header;
    } else {
      return <SafeAreaView style={{backgroundColor: this.BACKGROUND_COLOR}} testID={'layout-default-header'}/>;
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
