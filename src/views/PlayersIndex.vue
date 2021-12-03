<template>
  <div class="PlayersIndex">
    <div>
      Search by Name:
      <input type="text" v-model="nameFilter" list="names" />
      <datalist id="names">
        <option v-for="player in players" :key="player.account_id">{{ player.name }}</option>
      </datalist>
    </div>
    <h1>List of All Players</h1>
    <div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card" v-for="player in orderBy(filterBy(players, nameFilter, 'name'))" :key="player.account_id">
            <span>
              <div class="card-body">
                <h5 class="card-title">{{ player.name }}</h5>
                <img :src="player.avatarfull" alt="player.name" />
                <p class="card-text">{{ player.personaname }}</p>
                <p class="card-text">{{ player.team_name }}</p>
                <router-link v-bind:to="`/players/${player.id}`" class="btn btn-primary">Read More</router-link>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
span:hover {
  color: lightskyblue;
  background-color: white;
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
    };
  },
  created: function () {
    this.indexPlayers();
  },
  methods: {
    indexPlayers: function () {
      axios.get("http://localhost:3000/players").then((response) => {
        this.players = response.data;
        console.log("All Players", this.players);
      });
    },
  },
};
</script>
