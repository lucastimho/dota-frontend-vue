<template>
  <div class="players-index">
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Pro Players</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">A list of all players that play professionally for Dota 2</p>
          </div>
        </div>

        <div class="form-outline">
          <input
            type="search"
            id="form1"
            class="form-control"
            v-model="nameFilter"
            list="names"
            placeholder="Search Pro Player's Name"
            aria-label="Search"
          />
          <datalist id="names">
            <option v-for="player in players" :key="player.account_id">{{ player.name }}</option>
          </datalist>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li><button class="btn btn-primary" v-on:click="setSortAttribute('name')">Name</button></li>
              <li><button class="btn btn-primary" v-on:click="setSortAttribute('team_name')">Team</button></li>
              <li><button class="btn btn-primary" v-on:click="setSortAttribute('country_code')">Country</button></li>
            </ul>
          </div>
        </div>

        <!-- <div class="portfolio-container">
          <div
            class="col-lg-4 col-md-6 portfolio-item"
            v-for="player in orderBy(filterBy(players, nameFilter, 'name'))"
            :key="player.account_id"
          >
            <img :src="player.avatarfull" class="img-fluid" alt="" />
            <div class="col-lg-4 col-md-6 portfolio-info">
              <h4>{{ player.name }}</h4>
              <p>{{ player.team_name }}</p>
              <a
                href="assets/img/portfolio/portfolio-2.jpg"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox preview-link"
                title="Web 3"
              >
                <i class="bi bi-plus"></i>
              </a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bi bi-link"></i></a>
            </div>
          </div>
        </div> -->

        <div class="row">
          <div
            class="col-sm-6"
            v-for="player in orderBy(filterBy(players, nameFilter, 'name', 'team_name', 'country_code'), sortAttribute)"
            :key="player.account_id"
          >
            <div class="card">
              <span>
                <div class="card-body">
                  <h5 class="card-title">{{ player.name }}</h5>
                  <img :src="player.avatarfull" :alt="player.name" />
                  <p class="card-text">{{ player.personaname }}</p>
                  <p class="card-text">{{ player.team_name }}</p>
                  <router-link v-bind:to="`/players/${player.account_id}`" class="btn btn-primary">
                    Read More
                  </router-link>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Section -->
  </div>
</template>

<style>
span:hover {
  color: white;
  background-color: lightskyblue;
  transition: background-color 1s ease;
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      players: [],
      nameFilter: "",
      sortAttribute: "",
    };
  },
  created: function () {
    this.indexPlayers();
  },
  methods: {
    indexPlayers: function () {
      axios.get("/players").then((response) => {
        this.players = response.data;
        console.log("All Players", this.players);
      });
    },
    setSortAttribute: function (inputAttribute) {
      this.sortAttribute = inputAttribute;
    },
  },
};
</script>
