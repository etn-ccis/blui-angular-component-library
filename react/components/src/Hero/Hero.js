import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import PropTypes from 'prop-types';
import ChannelValue from '../ChannelValue/ChannelValue';
// import { combine } from './utilities'; 

const normalizeIconSize = (size) => {
  size = parseInt(size, 10);
  return Math.max(10, Math.min(36, size))
}
const normalizeFontSize = (size) => {
  return size === 'small' ? '1rem' : '1.25rem';
}

export const Hero = ({classes, icon, onClick, value, units, label, valueIcon, iconSize, fontSize, prefix=false, ...props }) => (
  <div style={{cursor: onClick ? 'pointer' : 'default'}} className={classes.wrapper} onClick={onClick ? () => onClick() : null}>
    <span className={classes.icon} style={{fontSize: normalizeIconSize(iconSize), height: 36}}>{icon}</span>
    <span className={classes.values} style={{fontSize: normalizeFontSize(fontSize)}}>
      {!props.children && value &&
        <ChannelValue value={value} units={units} icon={valueIcon}/>
      }
      {props.children}
    </span>
    <Typography variant={'subtitle1'} color={'inherit'} className={classes.label}>{label}</Typography>
  </div>
); 

Hero.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOf(['normal','small']),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  valueIcon: PropTypes.element,
  units: PropTypes.string,
}
Hero.defaultProps = {
  iconSize: 36,
  fontSize: 'normal'
};

const styles = (theme) => ({
  wrapper:{
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    flex: '1 1 0px',
    overflow: 'hidden',
    color: Colors.gray[500],
    padding: '16px 8px'
  },
  icon:{
    lineHeight: 1,
    color: Colors.gray[800],
    marginBottom: 10,
    display: 'block',
    width: 36,
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  values:{
    display: 'flex', 
    alignItems: 'center', 
    color: Colors.gray[800], 
    lineHeight: 1,
    maxWidth: '100%',
    overflow: 'hidden'
  },
  label: {
    fontSize: 'inherit',
    lineHeight: 1,
    letterSpacing: 0,
    fontWeight: 600,
    width: '100%',
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
});

export default withStyles(styles)(Hero);
