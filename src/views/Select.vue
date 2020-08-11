<template>
  <div>
    <h1 class="heading">Who do you want to rejoin your band?</h1>
    <div id="select">
      <div class="character" v-if="remaining.includes('Derrick')">
        <img src="../assets/derrick.png" alt="Derrick" class="portrait" @click="selectDerrick" />
      </div>
      <div class="character" v-if="remaining.includes('Kenny')">
        <img src="../assets/kenny.png" alt="Kenny" class="portrait" @click="selectKenny" />
      </div>
      <div class="character" v-if="remaining.includes('Garry')">
        <img src="../assets/garry.png" alt="Garry" class="portrait" @click="selectGarry" />
      </div>
    </div>
    <div id="confirm" v-show="picked">
      <h2>Recruit {{picked}}?</h2>
      <router-link to="/Challenges">
        <button class="button" @click="confirmSelect">Confirm</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: function() {
    return {
      picked: ""
    };
  },
  methods: {
    ...mapActions(["setRemCharacters"]),
    selectGarry() {
      this.picked = "Garry";
    },
    selectDerrick() {
      this.picked = "Derrick";
    },
    selectKenny() {
      this.picked = "Kenny";
    },
    confirmSelect() {
        this.setRemCharacters(
          this.remaining.filter(character => {
            return character != this.picked;
          })
        );
    }
  },
  computed: {
    ...mapGetters(["remaining"])
  }
};
</script>