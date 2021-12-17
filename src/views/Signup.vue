<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
        <small>{{ 20 - newUserParams.name.length }} characters remaining</small>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
        <small v-if="newUserParams.password.length > 0 && newUserParams.password.length < 6" class="text-danger">
          Password must be at least 6 characters
        </small>
        <small v-if="newUserParams.password.length > 20" class="text-danger">
          Password must be less than 20 characters
        </small>
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
        <small
          v-if="
            newUserParams.password_confirmation != newUserParams.password &&
            newUserParams.password_confirmation.length > 0
          "
          class="text-danger"
        >
          Password does not match
        </small>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: { name: "", email: "", password: "", password_confirmation: "" },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error.respone);
        });
    },
  },
};
</script>
