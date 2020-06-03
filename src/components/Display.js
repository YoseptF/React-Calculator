import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, onChange }) => {
  const handleChange = e => {
    if (e.target.value === '') {
      onChange('0');
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <input
      id="text17"
      type="number"
      pattern="[0-9]"
      autoComplete="off"
      value={Number(result).toString()}
      onChange={handleChange}
    />
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Display;
