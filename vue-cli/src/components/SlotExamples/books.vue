<template>
  <div>
    <div class="container my-4">
      <!-- <h5 class="text-center">Books</h5> -->
      <slot name="books">Nothing Passed</slot>
      <div class="custom row text-center border border-primary">
        <div class="cus col-md-12">Books Are Nothing Foound...</div>
      </div>
    </div>
    <slot name="Endbooks">Nothing Passed</slot>
  </div>
</template>
<script>
export default {
  activated() {
    console.log("Books_Activated");
  },
  deactivated() {
    console.log("Books_De_Activated");
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