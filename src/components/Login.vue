<template>
    
    <form class="login" @submit.prevent="login">
        <h1>Login</h1>
        <input type="text" v-model="email"/>
        <br>
        <input type="password" v-model="pass"/>
        <br>
        <button type="submit" v-on:click="Login">Login</button>
        <h3>Need a account? <router-link to="/register">Register here</router-link></h3>
    </form>
    
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default{
    name:"LoginComp",
    data(){
        return{
            email:"",
            pass:"",
        }
    },
    beforeMount(){
            firebase.auth().onAuthStateChanged((user)=>{
                    if(user)
                        this.$router.push('/')
                    
                })
        },
    methods:{
        async login(){
            try{
                await firebase.auth().signInWithEmailAndPassword(this.email,this.pass);
                this.$router.push('/')
        } catch (error){
            alert(error.message)
        }
        }
    }
}
</script>

<style scoped>
.login {
  margin: 0 auto;
  max-width: 400px;
  border: 1px solid #ccc;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;
}

input[type="text"],
input[type="password"] {
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  display: block;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}
</style>