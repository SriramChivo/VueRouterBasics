<template>
  <div>
    <h3 class="lead text-primary">the result is {{result}}</h3>
    <h4 class="lead text-primary">the multi*2 of result is {{mulres}}</h4>
    <h4 class="lead text-primary">the multi*10 of result is {{mulresten}}</h4>
    <!-- <h4 class="lead text-primary">the mutation of two result is {{trigg}}</h4> -->
    <button class="btn btn-primary my-2" @click="sumten(100)">Sum</button>
    <button class="btn btn-primary my-2" @click="decten(50)">subtract</button>
    <button class="btn btn-primary my-2" @click="asyncsumten({value:1000,duration:2000})">AsynSum</button>
    <button
      class="btn btn-primary my-2"
      @click="asyncdecten({value:500,duration:1000})"
    >AsyncSubtract</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  //   data() {
  //     return {
  //       result: this.$store.state.counter,
  //     };
  //   },
  //   watch: {
  //     $store() {
  //       this.result = this.$store.state.counter;
  //     },
  //   },
  computed: {
    ...mapGetters(["mulres", "mulresten"]),
    result() {
      return this.$store.state.counter;
    },
    // mulres() {
    //   return this.$store.getters.mulres;
    // },
    // mulresten() {
    //   return this.$store.getters.mulresten;
    // },
  },
  methods: {
    sumres() {
      this.$store.state.counter =
        this.$store.state.counter + 5 + this.$store.state.counter;
      return this.$store.state.counter;
    },
    ...mapMutations(["sumten", "decten"]),
    ...mapActions(["asyncsumten", "asyncdecten"]),
    // trigg(val) {
    //   return this.$store.commit("sumten", val);
    // },
  },
};
</script>