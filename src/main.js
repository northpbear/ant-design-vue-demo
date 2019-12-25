import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Icon, Menu, Layout, Drawer, Radio } from "ant-design-vue";
import AuthContol from "@/components/AuthContol";

Vue.component("auth-contol", AuthContol);

Vue.use(Button);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Drawer);
Vue.use(Radio);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
