<template>
  <div class="home">
    <img alt="Dota logo" src="../assets/dota_stock_image.jpeg" />
    <h1>{{ message }}</h1>
    <div v-for="game in games" :key="game.match_id.parseInt()">{{ game.players }}</div>
    <!-- <div class="row">
      <div class="column"></div>
      <div class="column"></div>
    </div> -->
  </div>
</template>

<style>
img {
  width: 700px;
}
.column {
  float: left;
  width: 50%;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the Dota 2 Database",
      games: {},
    };
  },
  created: function () {
    this.liveGames();
  },
  methods: {
    liveGames: function () {
      axios.get("https://api.opendota.com/api/live").then((response) => {
        this.games = response.data;
        console.log("Recent Games", this.games);
      });
    },
  },
};
</script>
