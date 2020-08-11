<template>
  <div>
    <div class="container">
      <img src="../assets/playButton.png" alt="play" width="200" @click="playMain()" />
      <audio src="../assets/rhythm1.wav" id="sound"></audio>
    </div>

    <div class="notes container">
      <button class="note" @click="playAudio('audio1', 1)">1</button>
      <audio src="../assets/Hi-Hat.wav" id="audio1"></audio>
      <button class="note" @click="playAudio('audio2', 2)">2</button>
      <audio src="../assets/Mid-Tom.wav" id="audio2"></audio>
    </div>

    <div v-show="this.completed" class="container">
      <router-link to="/select">
        <button class="button">Continue</button>
      </router-link>
    </div>

    <div v-show="!this.completed" class="container">
        <button class="button" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      completed: false,
      answerKey: [1, 2, 1],
      choices: []
    };
  },
  methods: {
    playMain() {
      const sound = document.getElementById("sound");
      sound.play();
    },
    playAudio(id, number) {
      const sound = document.getElementById(id);
      sound.play();
      this.choices.push(number);
      if (this.choices.length == 3) {
        if (this.choices.toString() === this.answerKey.toString()) {
          this.completed = true;
        } else {
          this.choices = [];
        }
      }
    },
    reset() {
        this.choices = [];
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.note {
  margin: 0 50px;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  border: none;
  color: white;
  background-color: #3c3c3c;
  font-size: 40px;
}

.container img:hover {
  cursor: pointer;
}
</style>