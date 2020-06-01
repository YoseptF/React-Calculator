import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Display = ({ value, onChange }) => {
  const handleChange = (e) => {
    if (e.target.value === '') {
      onChange(0);
    } else {
      onChange(parseFloat(e.target.value));
    }
  };

  return (
    <input
      id="text17"
      type="number"
      pattern="[0-9]"
      autoComplete="off"
      value={Number(value).toString()}
      onChange={handleChange}
    />
  );
};


Display.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Display;
