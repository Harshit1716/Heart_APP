import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { SIZES } from '../resources';

const Shape = props => {
  const { start, end, gradient, position, shapeColor, gradientColors } = props;

  function renderGradient() {
    return (
      <LinearGradient
        start={start}
        end={end}
        colors={[COLORS.header2, COLORS.header3]}
        style={{
          width: SIZES.width,
          height: SIZES.width,
          alignSelf: 'center',
          position: 'absolute',
          alignContent: 'center',
          borderRadius: SIZES.width / 2,
          transform: [{ scaleX: 2 }, { scaleY: 0.5 }],
          shadowRadius: 3,
          shadowOpacity: 0.3,
          shadowColor: '#595959',
          shadowOffset: { width: 0, height: 2 },
        }}
      />
    );
  }

  return renderGradient();
};

Shape.propTypes = {
  end: PropTypes.object,
  start: PropTypes.object,
  gradient: PropTypes.bool,
  shapeColor: PropTypes.string,
  gradientColors: PropTypes.array,
};

Shape.defaultProps = {
  gradient: true,
  end: { x: 1, y: 0 },
  start: { x: 0, y: 0 },
  shapeColor: '#ba75df',
  gradientColors: ['#12c2e9', '#c471ed', '#f64f59'],
};

export default Shape;
