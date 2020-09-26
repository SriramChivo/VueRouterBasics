<template>
  <div>
    <div class="container bg-primary my-4 text-center">
      <h5 class="pt-3 text-center text-uppercase text-light">User Page</h5>
      <button class="btn btn-danger" @click="guess">Guess</button>
      <p class="lead text-light">
        From Parent:
        <br />
        My name is {{name}}
      </p>
      <div class="row my-4">
        <div class="col-md-6 bg-warning">
          <detail-page :person="name" :age="age" @NameReseted="name=$event"></detail-page>
        </div>
        <div class="col-md-6 bg-danger">
          <edit-page :age="age" @edited="age=$event"></edit-page>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import detail from "./UserDetailsPage.vue";
import edit from "./UserEditPage.vue";
export default {
  components: {
    DetailPage: detail,
    editPage: edit,
  },
  data: function () {
    return {
      name: "Max",
      age: "0",
    };
  },
  methods: {
    guess() {
      return (this.name = "Anna");
    },
  },
};
</script>