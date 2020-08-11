<template>
  <div>
    <div id="intro">
      <video src="../assets/trailer.mp4" type="video/mp4" controls></video>
    </div>
    <div class="button-container">
        <router-link to="/cs">
            <button class="button">Continue</button>
        </router-link>
    </div>
  </div>
</template>

<style scoped>
#intro {
  display: flex;
  justify-content: center;
  margin-top: 50px;
} 

.button {
    margin-top: 50px;
}
</style>