import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigOne = Big(numberOne);
  const bigTwo = Big(numberTwo);
  switch (operation) {
    case '-':
      return bigOne - bigTwo;
    case '+':
      return bigOne + bigTwo;
    case 'X':
      return bigOne * bigTwo;
    case '%':
      return bigOne % bigTwo;
    case '÷':
      return bigOne / bigTwo;

    default:
      return -1;
  }
};

export default operate;
