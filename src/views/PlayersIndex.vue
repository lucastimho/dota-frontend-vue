<template>
  <div class="PlayersIndex">
    <h1>List of All Players</h1>
    <div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card" v-for="player in players" :key="player.id">
            <span>
              <div class="card-body">
                <h5 class="card-title">{{ player.name }}</h5>
                <img :src="player.avatar_full" alt="player.title" />
                <p class="card-text">{{ player.person_name }}</p>
                <p class="card-text">{{ player.mmr }}</p>
                <router-link v-bind:to="`/players/${player.id}`" class="btn btn-primary">Read More</router-link>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      players: [],
    };
  },
  created: function () {
    this.indexPlayers();
  },
  methods: {
    indexPlayers: function () {
      axios.get("api.opendota.com/api");
    },
  },
};
</script>
