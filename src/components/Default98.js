import React from 'react';
import '98.css';
import PropTypes from 'prop-types';

const TitleBar = ({ title }) => (
  <div className="title-bar windowHeader">
    <div className="title-bar-text">{title}</div>
    <div className="title-bar-controls">
      <button type="button" aria-label="Close" />
    </div>
  </div>
);

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};

const WindowBody = ({ children }) => (
  <div className="window-body">
    <div className="menu">
      <span>
        <u>E</u>
        dit
      </span>
      <span>
        <u>V</u>
        iew
      </span>
      <span>
        <u>H</u>
        elp
      </span>
    </div>
    {children}
  </div>
);

WindowBody.propTypes = {
  children: PropTypes.arrayOf(Element).isRequired,
};

export { TitleBar, WindowBody };
