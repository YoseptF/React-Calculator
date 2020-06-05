import React from 'react';
import Button from './Button';
import './ButtonPanel.scss';
import PropTypes from 'prop-types';

const ButtonPanel = ({ clickHandler }) => {
  const symbols = [
    [
      'AC', '+/-', '%', '÷',
    ],
    [
      '7', '8', '9', 'X',
    ],
    [
      '4', '5', '6', '-',
    ],
    [
      '1', '2', '3', '+',
    ],
    [
      '0', '.', '=',
    ],
  ];

  const buttons = symbols.map((group, index) => {
    const groupSymbols = group.map(symbol => (
      <Button
        name={symbol}
        key={symbol}
        wide={symbol === '0'}
        color={symbol === '0' ? 'orange' : 'silver'}
        onClick={clickHandler}
      />
    ));

    return (
      <div className={`group-${index + 1}`} key={`group-${index + 1}`}>
        {groupSymbols}
      </div>
    );
  });

  return (
    <div className="buttonPanel">
      {buttons}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
