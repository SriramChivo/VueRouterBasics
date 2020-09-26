<template>
  <div>
    <template>
      <!-- {{serverProp}} -->
      <li
        style="cursor: pointer"
        @click="selected"
        :class="{selectedclass:ind+1==seleIndex && judge}"
        :data-url="ind"
      >Server #{{serverProp.id}}</li>
    </template>
  </div>
</template>

<script>
import { eventbus } from "C:/Users/raaja/OneDrive/Desktop/RealVue/vue-cli/src/main.js";
export default {
  data() {
    return {
      cssselect: "selectedclass",
      seleIndex: "",
      judge: false,
    };
  },
  props: ["serverProp", "ind"],
  methods: {
    selected() {
      this.seleIndex = this.serverProp.id;
      console.log(this.serverProp.id);
      if (this.judge == false) {
        this.judge = true;
      } else {
        this.judge = false;
      }

      //   console.log(this);
      eventbus.$emit("Selected", this.serverProp);
    },
  },
};
</script>

<style scoped>
.selectedclass {
  background-color: cornflowerblue;
}
</style>>
    
</style>