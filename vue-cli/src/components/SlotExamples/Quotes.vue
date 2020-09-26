<template>
  <div>
    <hr />

    <div class="container my-4">
      <!-- <h5 class="text-center">Quotes</h5> -->
      <slot name="quotes">Nothing Passed</slot>
      <div class="custom row text-center border border-primary">
        <div class="cus col-md-12">The Wonderful Quote</div>
      </div>
    </div>
    <slot name="EndQuotes">Nothing Passed</slot>
  </div>
</template>
<script>
export default {
  activated() {
    console.log("Quotes_Activated");
  },
  deactivated() {
    console.log("Quotes_De_Activated");
  },
};
</script>
<style scoped>
.custom {
  height: 100px;
}
.cus {
  margin-top: auto;
  margin-bottom: auto;
}
</style>