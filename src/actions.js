export function clickNumber(number, prevState) {
  const newBuffer = '' + parseInt(prevState.buffer + number, 10);

  return {
    buffer: newBuffer
  }
}

export function clickClear(key, prevState) {
  return {
    buffer: '0'
  }
}
