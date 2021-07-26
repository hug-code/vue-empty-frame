/**
 * 数字保量小数位
 * @param number
 * @param digit
 * @param defaultVal
 * @returns {string}
 */
export function decimalPlaces(number, digit = 2, defaultVal = '') {
  return digit !== false && (number || Number(number) === 0) ? parseFloat(number).toFixed(digit) : defaultVal
}

/**
 * 数字前置补零
 * @param num 数字
 * @param length 位数
 * @returns {string}
 */
export function digit(num, length) {
  let str = '';
  num = String(num);
  length = length || 2;
  for (let i = num.length; i < length; i++) {
    str += '0';
  }
  return num < Math.pow(10, length) ? str + (num | 0) : num;
}
