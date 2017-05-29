export function clickNumber(number, prevState) {
  const { entry, memory, operation } = prevState;
  const newEntry = operation == null || entry !== memory
    ? String(parseInt(entry + number, 10))
    : number;

  return {
    entry: newEntry,
  };
}

export function clickAllClear() {
  return {
    entry: '0',
    memory: '0',
    operation: null,
  };
}

export function clickClearEntry() {
  return {
    entry: '0',
  };
}

export function clickSum(prevState) {
  return {
    memory: prevState.entry,
    operation: '+',
  };
}

export function clickSub(prevState) {
  return {
    memory: prevState.entry,
    operation: '-',
  };
}

function calculate(prevState) {
  const firstNumber = parseInt(prevState.memory, 10);
  const secondNumber = parseInt(prevState.entry, 10);

  if (prevState.operation === '+') {
    return String(firstNumber + secondNumber);
  }

  if (prevState.operation === '-') {
    return String(firstNumber - secondNumber);
  }

  throw new Error('Unsupported operation!');
}

export function clickEqual(prevState) {
  const result = calculate(prevState);

  return {
    entry: result,
    memory: result,
    operation: null,
  };
}
