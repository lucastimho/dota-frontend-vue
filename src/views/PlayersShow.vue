<template>
  <div class="players-show">
    <section id="portfolio">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">{{ player.profile.name }}</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">
              Welcome to {{ player.profile.name }}'s player entry. For more information about this player, their dota
              account number is {{ player.profile.account_id }}.
            </p>
          </div>
        </div>

        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>

        <div class="row portfolio-container">
          <div class="col-lg-4 col-md-1 portfolio-item filter-web">
            <img :src="player.profile.avatarfull" class="img-fluid" alt="" />
            <div class="portfolio-info">
              <h4>{{ player.profile.name }}</h4>
              <p>Rank: {{ player.leaderboard_rank }}</p>
              <p>MMR: {{ player.mmr_estimate.estimate }}</p>
              <div v-if="isLoggedIn()">
                <a data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Follow">
                  <i class="bi bi-plus" v-on:click="followPlayer()"></i>
                </a>
              </div>
              <dialog id="follow-confirmation">
                <form method="dialog">
                  <label>Are you sure you would like to add this player?</label>

                  <button v-on:click="createFollowing()">Yes</button>
                  <button>No</button>
                </form>
              </dialog>
              <a href="/players" class="details-link" title="Back to All Pro players">
                <i class="bi bi-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      player: {},
      errors: [],
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
    followPlayer: function () {
      axios
        .post("/players/" + this.player.profile.account_id)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          this.status = error.response.status;
          this.errors = error.response;
          console.log(error.response);
        });
      document.querySelector("#follow-confirmation").showModal();
    },
    createFollowing: function () {
      axios
        .post("/followings/" + this.$route.params.account_id, this.user)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          this.errors = error.response;
          console.log(error.response);
        });
    },
  },
};
</script>
