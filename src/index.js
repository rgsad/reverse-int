module.exports = function reverse (n) {
    let number  = n < 0 ? -n : n;
    let num = 0;
  
    while (number > 0) {
      num = num * 10 + number % 10;
      number = Math.floor(number / 10);
    }
    return num;
}
