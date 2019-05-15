import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import PropTypes from 'prop-types';
import { combine } from './utilities'; 

export const HeroChannel = ({classes, trend, value, units, label, icon, iconSize, prefix=false, ...props }) => (
  <div style={Object.assign({
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    flex: '1 1 0px',
    color: Colors.gray[500],
    padding: '16px 8px'
  }, props.style)}>
    <span style={{fontSize: iconSize || 36, lineHeight: iconSize || '36px', color: Colors.gray[800], marginBottom: 10}} >{icon}</span>
    <span style={{display: 'flex', alignItems: 'center', color: Colors.gray[800], fontSize: '1.25rem', lineHeight: '1.25rem'}}>
      {props.children}
    </span>
    <Typography variant={'subtitle1'} color={'inherit'} className={combine([classes.text, classes.value])}>{label}</Typography>
  </div>
); 

HeroChannel.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
HeroChannel.defaultProps = {

};

const styles = (theme) => ({
  text: {
    //display: 'inline',
    // color: Colors.gray[800],
    fontSize: 'inherit',
    lineHeight: 'inherit',
    letterSpacing: 0
  },
  unit:{
    fontWeight: 300
  },
  value:{
    fontWeight: 600
  }
});

export default withStyles(styles)(HeroChannel);
