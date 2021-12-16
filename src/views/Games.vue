<template>
  <div class="home">
    <div v-if="!isLoggedIn()">
      <!-- ======= Services Section ======= -->
      <section id="services">
        <div class="container">
          <div class="row" data-aos="fade-up">
            <div class="col-md-12">
              <h3 class="section-title">Live Games</h3>
              <div class="section-title-divider"></div>
              <p class="section-description">Live games currently being played for Dota 2</p>
            </div>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="200" v-for="game in liveGamesNow" :key="game.match_id">
            <div class="col-lg-4 col-md-6 service-item">
              <div class="service-icon"><i class="bi bi-bar-chart"></i></div>
              <h4 class="service-title">
                <a href="">Avg. MMR: {{ game.average_mmr }}</a>
              </h4>
              <p class="service-description">Game Time: {{ game.game_time }}</p>
            </div>
          </div>
        </div>
      </section>
      <!-- End Services Section -->
    </div>
    <div v-if="isLoggedIn()">
      <!-- ======= Services Section ======= -->
      <section id="services">
        <div class="container">
          <div class="row" data-aos="fade-up">
            <div class="col-md-12">
              <h3 class="section-title">Recent Games</h3>
              <div class="section-title-divider"></div>
              <p class="section-description">List of your most recently played matches on Dota 2</p>
            </div>
          </div>

          <div
            class="row"
            data-aos="fade-up"
            data-aos-delay="200"
            v-for="game in recentGamesPlayed"
            :key="game.match_id"
          >
            <div class="col-lg-4 col-md-6 service-item">
              <div class="service-icon"><i class="bi bi-bar-chart"></i></div>
              <h4 class="service-title">
                <a href="">Radiant Victory: {{ game.radiant_win }}</a>
              </h4>
              <p class="service-description">Game Duration: {{ game.duration }}</p>
              <p class="service-description">Kills: {{ game.kills }}</p>
              <p class="service-description">Deaths: {{ game.deaths }}</p>
              <p class="service-description">Assists: {{ game.assists }}</p>
              <p class="service-description">XPM: {{ game.xp_per_min }}</p>
              <p class="service-description">GPM: {{ game.gold_per_min }}</p>
              <p class="service-description">Hero Damage: {{ game.hero_damage }}</p>
              <p class="service-description">Tower Damage: {{ game.tower_damage }}</p>
              <p class="service-description">Healing: {{ game.hero_healing }}</p>
              <p class="service-description">Last Hits: {{ game.last_hits }}</p>
              <p class="service-description">Role: {{ game.lane_role }}</p>
            </div>
          </div>
        </div>
      </section>
      <!-- End Services Section -->
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
