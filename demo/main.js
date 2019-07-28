import Vue from 'vue'
import App from './App.vue'
import easyMq from '../src/index'

Vue.config.productionTip = false

Vue.use(easyMq, { debug: true, breakpoints: 'vuetify' })

new Vue({
  render: h => h(App)
}).$mount('#app')
