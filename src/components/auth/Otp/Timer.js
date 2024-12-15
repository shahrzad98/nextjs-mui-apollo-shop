import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{ position: 'relative', display: 'inline-flex', cursor: 'pointer' }}
    >
      <CircularProgress
        size={20}
        variant="determinate"
        value={props.value != 0 ? (props.value / props.max) * 100 : 80}
      />
      <Box ml={1}>
        <Typography variant="caption" component="div" color="text.primary">
          {props.value != 0 ? `00:${Math.round(props.value)}` : 'ارسال مجدد'}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired
};
export default CircularProgressWithLabel;
