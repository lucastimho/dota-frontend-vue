<template>
  <div class="players-show">
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    <h3>Name: {{ player.profile.name }}</h3>
    <img :src="player.profile.avatarfull" :alt="player.profile.name" />
    <p>Account ID: {{ player.profile.account_id }}</p>
    <p>Rank: {{ player.leaderboard_rank }}</p>
    <p>MMR: {{ player.mmr_estimate.estimate }}</p>
    <div v-if="isLoggedIn()">
      <button v-on:click="followPlayer()">Follow Player</button>
    </div>
    <dialog id="follow-confirmation">
      <form method="dialog">
        <label>Are you sure you would like to add this player</label>
        <button v-on:click="createFollowing()">Yes</button>
        <button>No</button>
      </form>
    </dialog>
    <router-link to="/players">Back to all players</router-link>
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      player: {},
      errors: [],
      status: "",
      following: {},
      user: {},
    };
  },
  created: function () {
    axios.get("/players/" + this.$route.params.account_id).then((response) => {
      this.player = response.data;
    });
    axios.get("/user").then((response) => {
      this.user.user_id = response.data.id;
    });
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
    followPlayer: function () {
      axios
        .post("/players", this.player)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response);
        });
      document.querySelector("#follow-confirmation").showModal();
    },
    createFollowing: function () {
      axios
        .post("/followings/" + this.$route.params.account_id, this.user)
        .then(() => {
          this.$router.push("/players");
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response);
        });
    },
  },
};
</script>
