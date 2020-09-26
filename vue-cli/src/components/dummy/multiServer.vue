<template>
  <div>
    <p class="lead" v-if="details">
      #Server{{details.id}} is selected and server status is :
      <span
        style="color:red"
      >{{details.status}}</span>
    </p>
    <p class="lead" v-else>Sorry no servers selected</p>
    <button class="btn btn-primary" v-if="details!=null" @click="switched">Switch</button>
  </div>
</template>

<script>
import { eventbus } from "C:/Users/raaja/OneDrive/Desktop/RealVue/vue-cli/src/main.js";
export default {
  data() {
    return {
      details: null,
    };
  },
  methods: {
    switched() {
      this.details.status = "Normal";
    },
  },
  created() {
    eventbus.$on("Selected", (data) => {
      console.log(data);
      this.details = data;
    });
  },
};
</script>