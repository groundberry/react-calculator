export function clickNumber(number, prevState) {
  const newBuffer = String(parseInt(prevState.buffer + number, 10));

  return {
    buffer: newBuffer,
  };
}

export function clickAllClear() {
  return {
    buffer: '0',
  };
}
