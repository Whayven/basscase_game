<template>
  <div>
    <div id="easy" v-if="remaining.length == 2">
      <h1 class="heading">Easy Challenge</h1>
      <TriviaEasy v-if="randomNumber == 0" />
      <RhythmEasy v-if="randomNumber == 1" />
    </div>
    <div id="hard" v-if="remaining.length == 1">
      <h1 class="heading">Hard Challenge</h1>
      <TriviaHard v-if="randomNumber == 0" />
      <RhythmHard v-if="randomNumber == 1" />
    </div>
    <div id="ex" v-if="remaining.length == 0">
      <h1 class="heading">Someone Approaches!</h1>
      <div class="button-container">
          <router-link to="/bazel">
              <button class="button">Continue</button>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TriviaEasy from "../components/TriviaEasy";
import TriviaHard from "../components/TriviaHard";
import RhythmEasy from "../components/RhythmEasy";
import RhythmHard from "../components/RhythmHard";

export default {
  components: {
    TriviaEasy,
    TriviaHard,
    RhythmEasy,
    RhythmHard
  },
  computed: {
    ...mapGetters(["remaining"]),
    randomNumber: () => Math.floor(Math.random()*Math.floor(2))
  }
};
</script>
