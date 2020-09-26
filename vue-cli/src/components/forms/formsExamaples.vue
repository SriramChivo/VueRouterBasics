<template>
  <div>
    <form>
      <div class="form-group">
        <user-form :fn="firstname" :ln="lastname" v-model="fullname"></user-form>
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="Password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-group form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          value="Check me out"
          v-model="checkbox"
        />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select v-model="defaultSelected" class="form-control" id="exampleFormControlSelect1">
            <option v-for="o in options" :key="o" :selected="o=='Second'">{{o}}</option>
          </select>
          <div class="form-check">
            <input
              v-model="radioSel"
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Default radio"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">Default radio</label>
          </div>
          <div class="form-check">
            <input
              v-model="radioSel"
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="Second default radio"
            />
            <label class="form-check-label" for="exampleRadios2">Second default radio</label>
          </div>
          <div class="form-check">
            <input
              v-model="radioSel"
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="Disabled radio"
            />
            <label class="form-check-label" for="exampleRadios3">Disabled radio</label>
          </div>
        </div>
        <div class="form-check">
          <input
            v-model="mulcheck"
            class="form-check-input"
            type="checkbox"
            value="Default checkbox"
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
        </div>
        <div class="form-check">
          <input
            v-model="mulcheck"
            class="form-check-input"
            type="checkbox"
            value="Disabled checkbox"
            id="defaultCheck2"
          />
          <label class="form-check-label" for="defaultCheck2">Disabled checkbox</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="Issubmitted=!Issubmitted">Submit</button>
    </form>
    <div class="container my-4" v-if="Issubmitted">
      <h4 class="lead texte-center">My Data</h4>
      <p class="lead">My fullname is {{fullname}}</p>
      <p class="lead">My Name is {{email}}</p>
      <p class="lead">My Password is {{Password}}</p>
      <p class="lead">My checkbox is {{checkbox}}</p>
      <p class="lead">My Selectbox is {{defaultSelected}}</p>
      <p class="lead">My RadioSelected is {{radioSel}}</p>
      <p class="lead">My MultiSelected is {{mulcheck}}</p>
    </div>
  </div>
</template>
<script>
import user from "./userdata.vue";
export default {
  components: {
    userForm: user,
  },
  data() {
    return {
      email: "",
      Password: "",
      Issubmitted: false,
      checkbox: "",
      options: ["First", "Second", "Third"],
      defaultSelected: "",
      radioSel: "",
      mulcheck: [],
      firstname: "",
      lastname: "",
      fullname: "",
    };
  },
  methods: {
    // submitted(data) {
    //   this.Issubmitted = data;
    // },
  },
};
</script>
