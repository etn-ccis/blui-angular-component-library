import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import PropTypes from 'prop-types';
import { combine } from './utilities'; 

export const ChannelValue = ({classes, trend, value, units, prefix=false, ...props }) => (
  <span style={{display: 'flex', alignItems: 'center', color: Colors.gray[800], fontSize: '1.25rem', lineHeight: '1.25rem'}}>
    {trend && <span style={{marginRight: 4, display: 'inline', lineHeight: 0}}>{trend}</span>}
    {prefix && <Typography variant={"h6"} color={'inherit'} className={combine([classes.text, classes.unit])}>{units}</Typography>}
    <Typography variant={'h6'} color={'inherit'} className={combine([classes.text, classes.value])}>{value}</Typography>
    {!prefix && <Typography color={'inherit'} variant={"h6"} className={combine([classes.text, classes.unit])}>{units}</Typography>}
  </span>
); 

ChannelValue.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  trend: PropTypes.object,
  units: PropTypes.string,
  prefix: PropTypes.bool
}
ChannelValue.defaultProps = {
  trend: false,
  prefix: false
};

const styles = (theme) => ({
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
