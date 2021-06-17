import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'amfe-flexible'
import '@/utils/filter'
import '@/config/use-components'
import '@/assets/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
