<template>
  <div>
    <p class="lead text-light">my name is more dynamic if you click guess button</p>
    <p class="lead text-light my-2">Is My name is {{person}}</p>
    <p class="lead text-light my-2">My Age is {{age}}</p>
    <button id="cssl" class="btn btn-success my-2" @click="reset">Reset</button>
  </div>
</template>
<script>
import { eventbus } from "C:/Users/raaja/OneDrive/Desktop/RealVue/vue-cli/src/main.js";
export default {
  props: ["person", "age"],
  methods: {
    reset() {
      this.person = "Max";
      this.$emit("NameReseted", this.person);
    },
  },
  created() {
    eventbus.$on("edited", (data) => {
      this.age = data;
    });
  },
};
</script>

<style scoped>
#cssl {
  color: black;
}
</style>