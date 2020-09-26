<template>
  <div>
    <p v-once>{{booli}}</p>
    <h1 v-MyOn:click="func">done?</h1>
    {{data1}}
    <hr />
    <input type="text" v-model="Text" />
    {{booli}}
    <button @click="booli=!booli">Click to see reverse string</button>
    {{Text | lengthStr}}
    <p v-if="booli">{{Text | reverse}}</p>
    <p v-else>{{Text}}</p>
    <p>Computed use : {{reverscomputed}}</p>
    {{textMix}}
    <hr />
    {{lengthMixComp}}
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input
          v-model="user.username"
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
        <label for="exampleInputPassword1">Email</label>
        <input
          v-model="user.email"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="lastname"
        />
        <button class="btn btn-primary btn-sm" @click.prevent="vuesubmit">Submit</button>
      </div>
    </form>
    <h1>Data from firebase</h1>
    <button class="btn btn-lg btn-primary" @click.prevent="fetchdata">FetchData</button>
    <ul>
      <li v-for="u in arr" :key="u">{{u}}</li>
    </ul>
  </div>
</template>
<script>
import { stdmxin } from "./stdmixins.js";
export default {
  mixins: [stdmxin],
  data() {
    return {
      data1: "",
      booli: false,
      Text: "",
      user: {
        username: "",
        email: "",
      },
      arr: [],
    };
  },
  filters: {
    reverse(value) {
      return value.split("").reverse().join("");
    },
    lengthStr(value) {
      return value + " {" + value.length + "}";
    },
  },
  computed: {
    Complength() {
      return this.Text.toUpperCase();
    },
    reverscomputed() {
      return this.Text.split("").reverse().join("");
    },
  },
  methods: {
    vuesubmit() {
      this.$http
        .post(
          "https://vuejsexample-e9daf.firebaseio.com/firstTest.json",
          this.user
        )
        .then(
          (Response) => {
            console.log(Response);
          },
          (Error) => {
            console.log(Error);
          }
        );
    },
    fetchdata() {
      this.$http
        .get("https://vuejsexample-e9daf.firebaseio.com/firstTest.json")
        .then((Response) => {
          // console.log(Response);
          var data;
          data = Response.json();
          return data;
          // console.log(Response);
        })
        .then((data) => {
          console.log(data);
          const resArr = [];
          for (let key in data) {
            console.log(key);
            resArr.push(data[key]);
            // console.log(value);
          }
          this.arr = resArr;
        });
    },
    func() {
      return (this.data1 = "Its worken with directive");
    },
  },
  directives: {
    MyOn: {
      bind(el, binding, vnode) {
        el.style.cursor = "pointer";
        el.style.backgroundColor = "red";
        el.addEventListener(binding.arg, () => {
          binding.value();
        });
      },
    },
  },
};
</script>