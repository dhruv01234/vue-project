<template>
    <nav class="nav" v-if="user">
        <div class="routes">
          <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/cart">Cart</router-link>
        </div>
        <div class="logout-nav">
          <button class="logout" v-on:click="logout">Logout</button>
        </div>
      </nav>
</template>

<script>
import firebase from 'firebase/app';
    export default {
        name:"NavComp",
        data(){
      return{
        home:"home",
        about:"about",
        user:null,
      }
    },
      beforeMount(){
        firebase.auth().onAuthStateChanged((user)=>{
          this.user = user;
        });
      },
    methods:{
        logout(){
                firebase.auth().signOut()
                .then(()=>{
                    this.$router.push('/login')
                })
                .catch((error)=>{
                    alert(error.message)
                })
            }
    },
}
</script>
