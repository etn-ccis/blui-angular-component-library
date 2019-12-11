import React from 'react';

import {withStyles} from '@material-ui/core/styles';

// Material-UI Icons

class DrawerBody extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.body) {
            return <></>;
        }
        return (
            <div
                className={this.props.classes.drawerWidthFull}
                style={{flex: '1 1 0px' }}
            >
                {this.props.createRouteItems(this.props.body.navGroups)}
            </div>
        );
    }
}

const styles = theme => ({});

export default withStyles(styles)(DrawerBody);
