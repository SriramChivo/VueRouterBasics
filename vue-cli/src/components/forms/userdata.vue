<template>
  <div>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">FirstName</label>
        <input
          v-model="fn"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        {{fn}}
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">LastName</label>
        <input
          v-model="ln"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="lastname"
        />
        {{ln}}
        <button class="btn btn-primary btn-sm" @click.prevent="full">fullname</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["fn", "ln"],
  methods: {
    full() {
      console.log(this.fn + " " + this.ln);
      this.$emit("input", this.fn + " " + this.ln);
    },
  },
};
</script>