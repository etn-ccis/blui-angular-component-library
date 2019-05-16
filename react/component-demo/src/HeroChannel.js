import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import PropTypes from 'prop-types';
import ChannelValue from './ChannelValue';
// import { combine } from './utilities'; 

export const HeroChannel = ({classes, icon, onClick, value, units, label, valueIcon, iconSize, prefix=false, ...props }) => (
  <div style={{cursor: onClick ? 'pointer' : 'default'}} className={classes.wrapper} onClick={onClick ? () => onClick() : null}>
    <span className={classes.icon} style={{fontSize: iconSize || 36, height: 36}}>{icon}</span>
    <span className={classes.values}>
      {!props.children && value &&
        <ChannelValue value={value} units={units} icon={valueIcon} fontSize={'inherit'} />
      }
      {props.children}
    </span>
    <Typography variant={'subtitle1'} color={'inherit'} className={classes.label}>{label}</Typography>
  </div>
); 

HeroChannel.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
HeroChannel.defaultProps = {

};

const styles = (theme) => ({
  wrapper:{
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    flex: '1 1 0px',
    color: Colors.gray[500],
    padding: '16px 8px'
  },
  icon:{
    lineHeight: 1,
    color: Colors.gray[800],
    marginBottom: 10,
    display: 'inline-flex',
    alignItems: 'center'
  },
  values:{
    display: 'flex', 
    alignItems: 'center', 
    color: Colors.gray[800], 
    fontSize: '1.25rem', 
    lineHeight: 1,
  },
  label: {
    fontSize: 'inherit',
    lineHeight: 1,
    letterSpacing: 0,
    fontWeight: 600
  }
});

export default withStyles(styles)(HeroChannel);
