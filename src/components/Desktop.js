import React from 'react';
import PropTypes from 'prop-types';
import './Desktop.scss';

const Desktop = ({ children }) => (
  <div className="desktop">
    {children}
  </div>
);

Desktop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Desktop;
