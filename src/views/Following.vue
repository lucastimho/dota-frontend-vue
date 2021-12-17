<template>
  <div class="follows-show">
    <!-- <ul>
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
    </div> -->
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

        <div class="row">
          <div class="col-md-3">
            <div class="member">
              <div class="pic"><img src="assets/img/team/team-4.jpg" alt="" /></div>
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
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
        .catch((error) => console.log(error.response));
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
