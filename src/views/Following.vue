<template>
  <div class="follows-show">
    <!-- ======= Team Section ======= -->
    <section id="team">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Players You Follow</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">Here is your list of players that you follow.</p>
          </div>
        </div>

        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>

        <div class="row">
          <div class="col-md-3" v-for="follow in followingList" :key="follow.id">
            <div class="member">
              <div class="pic"><img :src="follow.avatar_full" :alt="follow.name" /></div>
              <h4>Name: {{ follow.name }}</h4>
              <span>Account ID: {{ follow.account_id }}</span>
              <span>Team: {{ follow.team }}</span>
              <span>MMR: {{ follow.mmr }}</span>
              <button class="btn btn-primary" v-on:click="updatePlayer(follow)">Update</button>
              |
              <button class="btn btn-primary" v-on:click="deletePlayer(follow)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Team Section -->
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
          this.$router.go("/following");
        })
        .catch((error) => {
          this.errors = error.response;
          console.log(error.response);
        });
    },
    deletePlayer: function (follow) {
      axios.delete(`/followings/${follow.id}`).then((response) => {
        console.log(response.data);
        this.$router.go("/following");
      });
    },
  },
};
</script>
