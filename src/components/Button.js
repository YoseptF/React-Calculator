import React from 'react';
import { PropTypes } from 'prop-types';
import './Button.scss';

const Button = ({ name, extraLarge }) => (
  <button
    type="button"
    className={`${extraLarge ? 'extraLarge' : ''}`}
  >
    {name}

  </button>
);

Button.defaultProps = {
  extraLarge: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  extraLarge: PropTypes.bool,
};

export default Button;
