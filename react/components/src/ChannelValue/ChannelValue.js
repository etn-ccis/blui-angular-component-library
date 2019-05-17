import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { combine } from '../utilities'; 

class ChannelValue extends React.Component {
  getUnitElement(){
    const {classes, units} = this.props;
    if(!units){return null};
    return (
      <Typography variant={"h6"} color={'inherit'} 
        className={combine([classes.text, classes.unit])}
      >
        {units}
      </Typography>
    );
  }
  render(){
    const {classes, icon, value, units, prefix, fontSize, color, ...props } = this.props;
  
    return (
      <span className={classes.wrapper} style={{fontSize: fontSize, color: color}}>
        {icon && 
          <span className={classes.icon}>{icon}</span>
        }
        {prefix ? this.getUnitElement() : null}
        <Typography variant={'h6'} color={'inherit'} 
          className={combine([classes.text, classes.value])}
        >
          {value}
        </Typography>
        {!prefix ? this.getUnitElement() : null}
      </span>
    );
  } 
}
ChannelValue.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.element,
  units: PropTypes.string,
  prefix: PropTypes.bool,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string
}
ChannelValue.defaultProps = {
  prefix: false,
  fontSize: 'inherit',
  color: 'inherit'
};

const styles = (theme) => ({
  wrapper:{
    display: 'inline-flex', 
    alignItems: 'center', 
    lineHeight: 1
  },
  icon:{
    marginRight: 4, 
    display: 'inline', 
    lineHeight: '1.25rem',
    height: '1.25rem'
  },
  text: {
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

export default withStyles(styles)(ChannelValue);
