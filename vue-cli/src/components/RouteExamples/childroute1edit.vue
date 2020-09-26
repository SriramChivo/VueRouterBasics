<template>
  <div>
    <h5>Edit page</h5>
    <h3>This is an user edit page for the child {{$route.params.id}}</h3>
    <button class="btn btn-primary" @click="isEdited=true">Confirm</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdited: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    console.log(from);
    if (false) {
      alert("Sorry No Access");
    } else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.isEdited) {
      next();
    } else {
      if (confirm("Are you sure want to leave this page")) {
        next();
      }
    }
  },
};
</script>