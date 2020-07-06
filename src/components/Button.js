import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  name, wide, color, onClick,
}) => {
  const styles = {
    backgroundColor: color,
  };

  const clickHandler = e => {
    onClick(e.target.innerText);
  };

  return (
    <button
      type="button"
      className={`${wide ? 'wide' : ''}`}
      style={styles}
      onClick={clickHandler}
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
  onClick: PropTypes.func.isRequired,
};

export default Button;
