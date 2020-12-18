export default function compare(a, b) {
    let firstField = Number((a.date).split('-').join(''));//переводим в число
    let secondFild = Number((b.date).split('-').join(''));//переводим в число
  if (firstField < secondFild) {
    return 1;
  }
  if (firstField > secondFild) {
    return -1;
  }
  // a должно быть равным b
  return 0;
  };