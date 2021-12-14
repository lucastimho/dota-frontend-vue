<template>
  <div class="follows-show">
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    <div v-for="follow in followingList" :key="follow.id">
      <h3>Name: {{ follow.name }}</h3>
      <img :src="follow.avatar_full" :alt="follow.name" />
      <p>Account ID: {{ follow.account_id }}</p>
      <p>Team: {{ follow.team }}</p>
      <p>MMR: {{ follow.mmr }}</p>
      <button v-on:click="updatePlayer(follow)">Update</button>
      <button v-on:click="deletePlayer(follow)">Delete</button>
    </div>
    <!-- <div>
      <router-link to="/followings">Follow this player</router-link>
      |
    </div>
    <router-link to="/players">Back to all players</router-link> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      followingList: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/followings").then((response) => {
      this.followingList = response.data;
      console.log(response.data);
    });
  },
  methods: {
    updatePlayer: function (follow) {
      axios
        .patch(`/players/${follow.id}`, follow)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error.response));
      this.$router.push("/following");
    },
    deletePlayer: function (follow) {
      axios.delete(`/followings/${follow.id}`).then((response) => {
        console.log(response.data);
      });
      this.$router.push("/following");
    },
  },
};
</script>
