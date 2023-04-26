<template>
  <NavComp/>
  <div class="content">
    <router-view></router-view>
  </div>
  </template>
  
  <script>
  import '@/style/main.css'
  import NavComp from './components/Navbar.vue'
  export default {
    name: 'App',
    components:{
      NavComp,
    }
  }
  </script>
  
  