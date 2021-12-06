<template>
  <div class="players-show">
    <div v-for="following in followingList" :key="following.id">
      <h3>Name: {{ following }}</h3>
      <!-- <img :src="player.profile.avatarfull" :alt="player.profile.name" />
      <p>Account ID: {{ player.profile.account_id }}</p>
      <p>Rank: {{ player.leaderboard_rank }}</p>
      <p>MMR: {{ player.mmr_estimate.estimate }}</p> -->
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
    };
  },
  created: function () {
    axios.get("/followings").then((response) => {
      this.followingList = response.data;
    });
  },
};
</script>
