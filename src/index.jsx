import React, { useState } from 'react'; // eslint-disable-line import/no-unresolved
import ReactDOM from 'react-dom'; // eslint-disable-line import/no-unresolved
import './index.css';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-unresolved
import Big from 'big.js'; // eslint-disable-line import/no-unresolved,import/extensions
import * as serviceWorker from './serviceWorker';

const Element = ({ value }) => {
  const [bigNum] = useState(new Big(123.4568).toString());

  return (
    <div>
      <h1>
        Hello World
        <span role="img" aria-label="world">
          🌎
        </span>
      </h1>
      <p>
        {bigNum}
        |
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
