export function clickNumber(number, prevState) {
  const newEntry = String(parseInt(prevState.entry + number, 10));

  return {
    entry: newEntry,
  };
}

export function clickAllClear() {
  return {
    entry: '0',
  };
}
