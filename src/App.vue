<template>
  <div id="app">
    <restaurants></restaurants>
  </div>
</template>

<script>
import Restaurants from './components/Restaurants';

export default {
  components: {
    Restaurants
  }
};
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: left;
  justify-content: left;
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
</style>
