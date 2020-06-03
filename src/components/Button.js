import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ name, wide, color }) => {
  const styles = {
    backgroundColor: color,
  };

  return (
    <button
      type="button"
      className={`${wide ? 'wide' : ''}`}
      style={styles}
    >
      {name}

    </button>
  );
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
