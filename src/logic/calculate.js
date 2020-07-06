import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let {
    next, total, current, operation,
  } = dataObject;
  switch (buttonName) {
    case '+':
    case '-':
    case 'X':
    case '÷':
      if (!total) {
        total = next;
        next = null;
        operation = buttonName;
        break;
      } else {
        total = operate(total, next, operation);
        next = null;
        current = total.toString();
        operation = buttonName;
      }

      break;

    case '=':
      if (operation === null) { break; }

      next = operate(total, next, operation);
      total = null;
      operation = null;
      current = next.toString();
      break;

    case '+/-':
      next *= -1;
      current = next;
      break;

    case 'AC':
      total = null;
      next = null;
      current = '0';
      operation = null;
      break;

    case '%':
      if (!total) {
        ({
          next, total, current, operation,
        } = calculate({
          next, total, current, operation,
        }, 'AC'));
      } else if (operation === '+' || operation === '-') {
        next = operate(total, next / 100, 'X');
        current = next.toString();
      } else if (operation === 'X' || operation === '÷') {
        next = operate(next, 100, '÷');
        current = next.toString();
      }
      break;

    default:
      if (next === null) next = '';
      next += buttonName;
      current = next;
      break;
  }
  return {
    next, total, current, operation,
  };
};

export default calculate;
