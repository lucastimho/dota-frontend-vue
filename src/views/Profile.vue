<template>
  <div>
    <h1>Profile page</h1>
    <form v-on:submit.prevent="updateUser(user)">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
      <h3>Account ID:</h3>
      <input v-model="user.account_id" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/user").then((response) => {
      this.user = response.data;
    });
  },
  methods: {
    updateUser: function (user) {
      axios
        .patch("/users/" + user.id, user)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>
