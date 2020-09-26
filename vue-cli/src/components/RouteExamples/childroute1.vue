<template>
  <div>
    <h1>From Child Route {{$route.params.id}}</h1>
    <h3>ID is {{ID}}</h3>
    <router-link :to="{ name: 'edit',params:{id:2}}" tags="button" class="btn btn-secondary">Edit</router-link>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      ID: this.$route.params.id,
    };
  },
  watch: {
    $route() {
      this.ID = this.$route.params.id;
    },
  },
};
</script>