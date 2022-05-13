import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import cids from 'cids-cgi/lib'
import Vuetify from 'vuetify/lib'
import moment from 'moment'

Vue.use(cids)

Vue.config.productionTip = false
Vue.prototype.moment = moment

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
