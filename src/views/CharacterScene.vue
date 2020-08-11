<template>
  <div>
    <div class="video">
      <video src="../assets/drums.mp4" controls v-if="character == 'Derrick'" />
      <video src="../assets/tuning.mp4" controls v-if="character == 'Garry'" />
      <video src="../assets/scale.mp4" controls v-if="character == 'Kenny'" />
    </div>
    <div class="button-container">
      <router-link to="/challenges">
        <button class="button">Continue</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["character"])
  }
};
</script>

<style scoped>
.video {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.button {
    margin-top: 50px;
}
</style>