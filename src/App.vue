<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';

export default {
  name: 'app',
  components : {
    'Signup' : Signup,
    'Signin' : Signin,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  body {
    background-color:  #F6F6F6;
  }
</style>
