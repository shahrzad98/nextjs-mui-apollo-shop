import PropTypes from 'prop-types';

export default function GradientDivider({ direction = 'hor', styles }) {
  // "hor" or "ver"
  const baseStyles = {
    background: `linear-gradient(${
      direction === 'hor' ? 'to right' : 'to bottom'
    }, transparent, #EEEEEE , #D1D1D2, #EEEEEE , transparent)`,
    height: direction === 'hor' ? '1px' : '100%',
    width: direction === 'hor' ? '100%' : '1px'
  };

  return <div style={{ ...baseStyles, ...styles }}></div>;
}

GradientDivider.propTypes = {
  direction: PropTypes.oneOf(['hor', 'ver']),
  styles: PropTypes.object
};

export const GradientDividerPositions = {
  top: {
    dir: 'hor',
    styles: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0
    }
  },
  bottom: {
    dir: 'hor',
    styles: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0
    }
  },
  left: {
    dir: 'ver',
    styles: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0
    }
  },
  right: {
    dir: 'ver',
    styles: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0
    }
  }
};
