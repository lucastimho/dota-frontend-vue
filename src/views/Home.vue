<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to the Dota 2 Database",
      games: {},
    };
  },
  created: function () {
    // this.livesGame();
  },
};
</script>
