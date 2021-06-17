import Vue from 'vue';
import {constantFormatHtml, decimalPlaces} from './common'

// 保留小数位
Vue.filter('decimalPlaces', (number, digit = 2, defaultVal = '') => {
  return decimalPlaces(number, digit, defaultVal)
});

// 常量状态格式化
Vue.filter('constantFormatHtml', (status, type = '') => {
  return constantFormatHtml(status, type)
});
