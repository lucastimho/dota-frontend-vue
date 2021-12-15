<template>
  <div class="home">
    <div v-if="!isLoggedIn()">
      <div v-for="game in liveGamesNow" :key="game.match_id">
        -----------------------------------------------

        <p>Average MMR: {{ game.average_mmr }}</p>
        <p>Game Time: {{ game.game_time }}</p>
      </div>
    </div>
    <div v-if="isLoggedIn()">
      <div v-for="game in recentGamesPlayed" :key="game.match_id">
        <h2>Radiant Victory: {{ game.radiant_win }}</h2>
        <p>Game Duration: {{ game.duration }}</p>
        <p>Kills: {{ game.kills }}</p>
        <p>Deaths: {{ game.deaths }}</p>
        <p>Assists: {{ game.assists }}</p>
        <p>XPM: {{ game.xp_per_min }}</p>
        <p>GPM: {{ game.gold_per_min }}</p>
        <p>Hero Damage: {{ game.hero_damage }}</p>
        <p>Tower Damage: {{ game.tower_damage }}</p>
        <p>Healing: {{ game.hero_healing }}</p>
        <p>Last Hits: {{ game.last_hits }}</p>
        <p>Role: {{ game.lane_role }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      liveGamesNow: {},
      recentGamesPlayed: {},
    };
  },
  created: function () {
    this.liveGames();
    this.recentGames();
  },
  methods: {
    liveGames: function () {
      axios.get("https://api.opendota.com/api/live").then((response) => {
        this.liveGamesNow = response.data;
        console.log("Live Games", this.liveGamesNow);
      });
    },
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    recentGames: function () {
      axios.get("/recent").then((response) => {
        this.recentGamesPlayed = response.data;
      });
      console.log("Recent Games", this.recentGamesPlayed);
    },
  },
};
</script>
