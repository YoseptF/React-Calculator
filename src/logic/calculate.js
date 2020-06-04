import operate from './operate';

const calculate = (dataObject, buttonName) => {
  const newData = dataObject;
  switch (buttonName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      newData.next += buttonName;
      break;

    case '+/-':
      newData.total *= -1;
      newData.next *= -1;
      break;

    case 'AC':
      newData.total = '0';
      newData.next = '0';
      newData.operation = null;
      break;

    case '%':
      if (newData.total && parseFloat(newData.total) > 0) {
        newData.total = operate(dataObject.total, 100, '÷');
      }

      if (newData.next && parseFloat(newData.next) > 0) {
        newData.next = operate(dataObject.next, 100, '÷');
      }
      break;

    default:
      newData.total = operate(...dataObject);
      newData.next = '0';
      newData.operation = null;
      break;
  }
  return newData;
};

export default calculate;
