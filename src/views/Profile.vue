<template>
  <div>
    <h1>Profile page</h1>
    Account ID:
    <input v-model="user.account_id" />
    <button v-on:click="updateUser()">Update</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
    };
  },
  created: function () {
    axios.get("/user").then((response) => {
      this.user = response.data;
    });
  },
  methods: {
    updateUser: function () {
      axios
        .patch(`/users/${this.user.id}`, this.user.account_id)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response);
        });
    },
  },
};
</script>
