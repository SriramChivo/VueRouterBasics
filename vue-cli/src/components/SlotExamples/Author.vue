<template>
  <div>
    <div class="container my-4">
      <!-- <h5 class="text-center">Author</h5> -->
      <slot name="author">Nothing Passed</slot>
      <div class="custom row text-center border border-primary">
        <div class="cus col-md-12">Author of the quote i Myself..</div>
      </div>
    </div>
    <slot name="Endauthor">Nothing Passed</slot>
  </div>
</template>
<script>
export default {
  activated() {
    console.log("Authors_Activated");
  },
  deactivated() {
    console.log("Authors_De_Activated");
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