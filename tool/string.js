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
 * 去除左右空格
 * @param str
 * @returns {*}
 */
export function strTrim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
