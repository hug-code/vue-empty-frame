/**
 * 判断是否为ios
 * @returns {boolean}
 */
export function isIos() {
  let u = navigator.userAgent
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
