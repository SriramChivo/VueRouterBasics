<template>
  <div>
    <h1>From Main Route</h1>
    <div class="container">
      <div>
        <router-link to="/route1/1" tag="button" class="btn btn-warning">Child 1</router-link>
        <router-link to="/route1/2" tag="button" class="btn btn-warning">Child 2</router-link>
        <hr />
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     ID: this.$route.params.id,
  //   };
  // },
  // watch: {
  //   $route() {
  //     this.ID = this.$route.params.id;
  //   },
  // },
};
</script>