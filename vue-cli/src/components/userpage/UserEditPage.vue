<template>
  <div>
    <p class="lead text-light">Nothing to edit...</p>
    <p class="lead my-2">My Age is {{age}}</p>
    <button class="btn btn-success" @click="edit">Edit</button>
  </div>
</template>
<script>
import { eventbus } from "C:/Users/raaja/OneDrive/Desktop/RealVue/vue-cli/src/main.js";
export default {
//   props: ["age"],
    data() {
      return {
        age: "30",
      };
    },
  methods: {
    edit() {
      this.age = "25";
      eventbus.$emit("edited", this.age);
      //   console.log(eventbus);
    },
  },
};
</script>