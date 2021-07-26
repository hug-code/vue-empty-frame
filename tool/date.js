
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

/**
 *　时间戳（毫秒）转化为日期格式字符
 * @param time 时间
 * @param format 格式
 * @returns {string}
 */
export function toDateString(time, format) {
  if (!time) {
    return '';
  }
  if (typeof time === 'string') {
    time = time.replace(/-/g, '/');
  }
  let date = new Date(time || new Date()),
    ymd = [
      digit(date.getFullYear(), 4),
      digit(date.getMonth() + 1),
      digit(date.getDate())
    ],
    hms = [
      digit(date.getHours()),
      digit(date.getMinutes()),
      digit(date.getSeconds())
    ];
  format = format || 'yyyy-MM-dd HH:mm:ss';
  return format.replace(/yyyy/g, ymd[0])
    .replace(/MM/g, ymd[1])
    .replace(/dd/g, ymd[2])
    .replace(/HH/g, hms[0])
    .replace(/mm/g, hms[1])
    .replace(/ss/g, hms[2]);
}

/**
 * 日期转为周
 * @param timestamp
 * @returns {string}
 */
export function toWeek(timestamp) {
  let weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  let date = new Date(timestamp * 1000)
  let day = date.getDay()
  return weekDay[day];
}

/**
 * 年月日 转成 年-月-日 格式
 * @param ymd
 * @param join
 * @returns {string}
 */
export function ymdFormat(ymd, join = '-') {
  if (!ymd) {
    return ''
  }
  ymd = ymd.toString()
  if (ymd.length === 8) {
    return ymd.match(/(\d{4})(\d{2})(\d{2})/).filter((item, index) => index > 0).join(join)
  }
  return ymd
}
