<template>
  <div>
    <div class="container">
      <img src="../assets/playButton.png" alt="play" width="200" @click="playMain()" />
      <audio src="../assets/rhythm3.wav" id="sound"></audio>
    </div>

    <div class="notes container">
      <button class="note" @click="playAudio('audio1', 1)">1</button>
      <audio src="../assets/C7.wav" id="audio1"></audio>
      <button class="note" @click="playAudio('audio2', 2)">2</button>
      <audio src="../assets/D7.wav" id="audio2"></audio>
      <button class="note" @click="playAudio('audio3', 3)">3</button>
      <audio src="../assets/E7.wav" id="audio3"></audio>
    </div>

    <div v-show="this.completed" class="container">
        <button class="button" @click="handleContinue">Continue</button>
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
      answerKey: [1, 2, 3, 3, 2, 1, 1, 2, 3, 2, 1],
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
      if (this.choices.length == 11) {
        if (this.choices.toString() === this.answerKey.toString()) {
          this.completed = true;
        } else {
          this.choices = [];
        }
      }
    },
    reset() {
        this.choices = [];
    },
    handleContinue() {
        this.$emit('finished');
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