<template>
  <div id="app">
    <!-- <homePage></homePage>
    <server></server>
    <main-comp></main-comp>
    <form-example></form-example>-->
    <!-- <custom-directive></custom-directive> -->
    <!-- <main-route></main-route>
    <router-view></router-view>-->
    <vuex-demo></vuex-demo>
    <vuex-counter></vuex-counter>
  </div>
</template>

<script>
// import home from "./components/userpage/UserHomepage.vue";
// import server from "./components/dummy/home.vue";
// import main from "./components/SlotExamples/Main.vue";
// import formexample from "./components/forms/formsExamaples.vue";
// import directive from "./components/directives/directive.vue";
// import mainroute from "./components/RouteExamples/MainRouteComponent.vue";
import vuexDemo from "./components/VuexExamples/results.vue";
import vuexCounter from "./components/VuexExamples/counter.vue";
export default {
  components: {
    // customDirective: directive,
    // mainRoute: mainroute,
    // homePage: home,
    // server,
    // mainComp: main,
    // formExample: formexample,
    vuexDemo,
    vuexCounter,
  },
};
</script>

