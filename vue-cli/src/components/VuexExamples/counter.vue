<template>
  <div>
    <button @click="inc" class="btn btn-primary my-2">CounterUp</button>
    <button @click="dec" class="btn btn-primary my-2">CounterDown</button>
  </div>
</template>
<script>
export default {
  methods: {
    inc() {
      this.$store.state.counter++;
    },
    dec() {
      this.$store.state.counter--;
    },
  },
};
</script>