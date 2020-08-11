<template>
  <div id="home">
    <h1 class="heading">CHOOSE YOUR CHARACTER</h1>
    <div id="select">
      <div class="character" v-on:click="selectDerrick">
        <img src="../assets/derrick.png" alt="Derrick" class="portrait" />
      </div>
      <div class="character" v-on:click="selectKenny">
        <img src="../assets/kenny.png" alt="Kenny" class="portrait" />
      </div>
      <div class="character" v-on:click="selectGarry">
        <img src="../assets/garry.png" alt="Garry" class="portrait" />
      </div>
    </div>
    <div id="confirm" v-show="picked">
      <h2>Play as {{picked}}?</h2>
      <router-link to="/cc">
        <button class="button" @click="selectCharacter(picked)">Confirm</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      characters: ["Kenny", "Derrick", "Garry"],
      picked: ""
    };
  },
  methods: {
    ...mapActions(["selectCharacter", "setRemCharacters"]),
    selectDerrick() {
      this.picked = "Derrick";
      this.setRemCharacters(this.characters.filter((character) => {
        return character != this.picked
      }));
    },
    selectKenny() {
      this.picked = "Kenny";
      this.setRemCharacters(this.characters.filter((character) => {
        return character != this.picked
      }));
    },
    selectGarry() {
      this.picked = "Garry";
      this.setRemCharacters(this.characters.filter((character) => {
        return character != this.picked
      }));
    }
  }
};
</script>
