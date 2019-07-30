import React, { Fragment } from 'react';
import { SafeAreaView } from 'react-native';

export interface LayoutViewProps {
  /** Element to render as header of the screen */
  header?: React.ReactElement;

  /** Element to render as footer of the screen */
  footer?: React.ReactElement;
}

export class LayoutView extends React.Component<LayoutViewProps> {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        {this.header()}
        <SafeAreaView style={{flex: 1}}>
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
      return <SafeAreaView/>;
    }
  }

  private footer() {
    if (this.props.footer) {
      return this.props.footer;
    } else {
      return <SafeAreaView/>
    }
  }
}
