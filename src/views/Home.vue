<template>
  <!-- ======= Hero Section ======= -->
  <div>
    <section id="hero">
      <div class="hero-container">
        <div data-aos="fade-in">
          <h1>Welcome to the Dota 2 Database</h1>
          <h2>
            Look up
            <span class="typed" data-typed-items="live games, pro players, recent games, your favorite players"></span>
          </h2>
          <div class="actions" v-if="!isLoggedIn()">
            <a href="#about" class="btn-get-started">Sign Up</a>
            <a href="#services" class="btn-services">Live Games</a>
          </div>
          <div class="actions" v-if="isLoggedIn()">
            <a href="#about" class="btn-get-started">Following</a>
            <a href="#services" class="btn-services">Recent Games</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->
  </div>
</template>

<script>
export default {
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
  },
};
</script>
