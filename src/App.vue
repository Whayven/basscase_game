<template>
  <div id="app">
    <div id="logo">
      <router-link to="/">
        <img src="./assets/logo.png" alt="logo">
      </router-link>
      
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#logo {
  width: 150px;
}

#logo img { 
  width: 100%;
  padding: 10px;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow-x: hidden;
  color: #FFF;
  font-family: "Segoe UI", "Segoe", "DejaVu Sans", "Trebuchet MS", Verdana, "sans-serif";
  background-color: #007FFF;
}

.button {
  height: 50px;
	width: 110px;
	border-radius: 26px;
	border: none;
	color: white;
	background-color: #3C3C3C;
  font-size: 20px;
	font-weight: 500;
}

.button-container {
    display: flex;
    justify-content: center;
}

.button:hover {
  background-color: #ED3624;
}

#select {
  display: flex;
  margin-top: 100px;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
}

.heading {
  width: 100%;
  text-align: center;
}

.character {
  display: flex;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  border: 2px solid white;
  justify-content: center;
  padding: 25px;
  padding-bottom: 0;
  transition: all .2s ease-in-out;
}

.character:hover {
  transform: scale(1.1);
}

.portrait {
  height: 100px;
  width: 100px;
}

#confirm {
  width: 100%;
  text-align: center;
  margin-top: 100px;
}
</style>
