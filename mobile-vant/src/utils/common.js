import constant from '@/config/constant'

/**
 * 随机字符串
 * @param len
 * @returns {string}
 */
export function randomString(len = 16) {
  let t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
  for (let i = 0; i < len; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
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

/**
 * 常量状态格式化
 * @param status 值
 * @param type  常量类型
 * @returns {string|*}
 */
export function constantFormatHtml(status = '', type = '') {
  if (status !== '' && type !== '') {
    return constant[type][status] ? constant[type][status] : false;
  }
  return '';
}

/**
 * 获取下拉框数据
 * @param type 常量类型
 * @param isAll 是否包含全部  用于全部得值
 * @param filter 过滤得值
 * @param valuePrefix 值前缀
 * @returns {[{label: string, value: string}]|[]}
 */
export function downConstantList(type = '', isAll = '', filter = [], valuePrefix = false) {
  let result = isAll !== false ? [{label: '全部', value: isAll}] : [];
  if (constant[type]) {
    let value = constant[type];
    for (let key in value) {
      if (filter.length === 0 || !filter.includes(Number(key))) {
        let val = valuePrefix ? valuePrefix + key : Number(key)
        result.push({label: value[key], value: val});
      }
    }
  }
  return result;
}

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
 * 去除左右空格
 * @param str
 * @returns {*}
 */
export function strTrim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
