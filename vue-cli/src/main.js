import Vue from 'vue'
import App from './App.vue'
import home from './components/dummy/home.vue'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import { routes } from "./router.js"
import { central } from "./store/store"
// Vue.component('my-comp', home);

// var abc = Vue.component(home);

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter(
  {
    routes,
    mode: "history",
  }
);

Vue.directive("MyOn", {
  bind(el, binding, vnode) {
    if (binding.args == "click") {
      console.log("jil");
    }
  }
})

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value;
    console.log(binding.modifiers['delayed']);
    if (binding.modifiers['delayed']) {
      setTimeout(
        () => {
          el.style.color = binding.arg;
        }, 3000)
    }

  }
})

export const eventbus = new Vue();

new Vue({
  el: '#app',
  router,
  store: central,
  render: h => h(App),
})
