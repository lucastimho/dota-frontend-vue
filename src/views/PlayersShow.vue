<template>
  <div class="players-show">
    <h3>Name: {{ player.profile.name }}</h3>
    <img :src="player.profile.avatarfull" :alt="player.profile.name" />
    <p>Account ID: {{ player.profile.account_id }}</p>
    <p>Rank: {{ player.leaderboard_rank }}</p>
    <p>MMR: {{ player.mmr_estimate.estimate }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      player: {},
    };
  },
  created: function () {
    axios.get("/players/" + this.$route.params.account_id).then((response) => {
      this.player = response.data;
    });
  },
};
</script>
