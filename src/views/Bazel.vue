<template>
  <div>
    <div v-if="!viewed">
      <div class="video">
        <video src="../assets/Bazel.mp4" controls></video>
      </div>
      <div class="button-container">
        <button class="button" @click="handleContinue">Continue</button>
      </div>
    </div>

    <div v-else>
        <div v-if="challengesDone == 0">
            <TriviaEX v-on:finished="completeChallenge" />
        </div>
        <div v-if="challengesDone == 1">
            <RhythmEX v-on:finished="completeChallenge" />
        </div>
        <div v-if="challengesDone == 2">
            <h1 class="heading">Bazel has joined your band and your band is complete! Rock out!</h1>
            <h2 class="heading">Thanks for playing!</h2>
        </div>
    </div>
  </div>
</template>

<script>
import TriviaEX from "../components/TriviaEX";
import RhythmEX from "../components/RhythmEX";

export default {
  components: {
    TriviaEX,
    RhythmEX
  },
  data: function() {
    return {
      viewed: false,
      challengesDone: 0
    };
  },
  methods: {
    handleContinue() {
      this.viewed = true;
    },
    completeChallenge() {
        this.challengesDone++;
    }
  }
};
</script>

<style scoped>
.video {
  display: flex;
  justify-content: center;
}

.button-container {
  margin: 25px 0;
}
</style>