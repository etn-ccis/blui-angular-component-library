import React from 'react';

/**
 * DrawerPage component
 *
 * This component is simply a pass-through to help the Drawer component
 * decide to render content on it's first page or second.
 */
export class DrawerPage extends React.Component {
  static displayName = 'Drawer.Page';

  render() {
    return this.props.children;
  }
}
