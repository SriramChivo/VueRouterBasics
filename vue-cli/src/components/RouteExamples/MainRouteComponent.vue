<template>
  <div>
    <router-link to="/route1">
      <button class="btn btn-primary mx-1">1st Route</button>
    </router-link>
    <router-link to="/route2" tags="button" class="btn btn-primary mx-1">2nd Route</router-link>
    <button class="btn btn-danger" @click="TriggerRoute">Go to Homepage</button>
  </div>
</template>
<script>
export default {
  methods: {
    TriggerRoute() {
      this.$router.push("/");
    },
  },
};
</script>