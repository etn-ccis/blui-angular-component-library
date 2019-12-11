import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";

class DrawerFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.footer) {
            return <></>;
        }
        return (
            <>
                <Divider/>
                <div
                    className={this.props.styles.drawerWidthFull}
                    style={{
                        flex: '1 1 0px',
                        position: 'absolute',
                        bottom: 0,
                    }}
                >
                    {this.props.createRouteItems(this.props.footer.navGroups)}
                    <div style={{visibility: (this.props.parentState.drawerOpen ? '' : 'hidden')}}>
                        {this.props.footer.content}
                    </div>
                </div>
            </>
        );
    }
}

const styles = theme => ({});

export default withStyles(styles)(DrawerFooter);
