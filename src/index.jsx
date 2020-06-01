import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import Big from 'big.js';
import * as serviceWorker from './serviceWorker';

const Element = ({ value }) => {
  const [bigNum] = useState((new Big(123.4567)).toString());

  return (
    <div>
      <h1>
        Hello World
        {' '}
        <span role="img" aria-label="world">🌎</span>
      </h1>
      <p>
        {bigNum}
        {' '}
        |
        {' '}
        {value}
      </p>
    </div>
  );
};

Element.propTypes = {
  value: PropTypes.string.isRequired,
};

ReactDOM.render(
  <React.StrictMode>
    <Element value="3" />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
