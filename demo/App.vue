<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ShowProperties msg="vue-easy-mq demo"/>
  </div>
</template>

<script>
import ShowProperties from './components/ShowProperties.vue'

export default {
  name: 'app',
  components: {
    ShowProperties
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
