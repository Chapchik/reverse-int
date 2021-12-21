module.exports = function reverse(n) {
  let abs = Math.abs(n);
  let res = '';
  let digit;

  while (abs) {
    digit = abs % 10;
    res = res + digit;
    abs = Math.floor(abs / 10);
  }
  return Number(res);
}