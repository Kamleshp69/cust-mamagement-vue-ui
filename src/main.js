import Vue from "vue";
import BootstrapVue from 'bootstrap-vue';
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueMoment from 'vue-moment';
import moment from 'moment-timezone';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;


Vue.use(VueMoment, {
  moment,
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
