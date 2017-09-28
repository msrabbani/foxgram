<template>
  <div id="app">
    <navbar></navbar>
    <Form></Form>
    <galery></galery>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Galery from './components/Galery.vue'
import Form from './components/Form.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Galery,
    Form
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
  margin-top: 10px;
}
</style>
