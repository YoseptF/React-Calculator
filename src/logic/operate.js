import Big from 'big.js'; // eslint-disable-line import/extensions

const operate = (numberOne, numberTwo, operation) => {
  let bigOne;
  let bigTwo;
  if (numberOne == null || numberTwo == null) {
    bigOne = Big(0);
    bigTwo = Big(0);
  } else {
    bigOne = Big(numberOne);
    bigTwo = Big(numberTwo);
  }
  switch (operation) {
    case '-':
      return bigOne.minus(bigTwo);
    case '+':
      return bigOne.plus(bigTwo);
    case 'X':
      return bigOne.times(bigTwo);
    case '÷':
      if (parseFloat(numberTwo) === 0) return 'error';
      if (parseFloat(numberTwo) === '.') return 0;
      return bigOne.div(numberTwo);

    default:
      return -1;
  }
};

export default operate;
