<template>
    <div class="register">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <br>
        <button type="submit">Register</button>
        <h3>Have a account? <router-link to="/login">Login here</router-link></h3>
      </form>
      
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/app'
  import 'firebase/auth'
  
  export default {
    name: 'RegisterComp',
    data() {
      return {
        email: '',
        password: '',
        name:'',
      }
    },
    beforeMount(){
            firebase.auth().onAuthStateChanged((user)=>{
                    if(user)
                        this.$router.push('/')
                    
                })
        },
    methods: {
      register() {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential)=>{
            const user = userCredential.user;
            firebase.database().ref('users/'+user.uid).set({
              name: this.name,
              email: this.email,
              uid:user.uid,
            });
            this.$router.push('/')
          })
          .catch((error)=>{
            alert(error.message);
          })
          
      }
    }
  }
  </script>
  <style scoped>
  .register{
    margin: 0 auto;
    max-width: 400px;
    border: 1px solid #ccc;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #ccc;
  }
  
  input[type="email"],
  input[type="text"],
  input[type="password"] {
    display: block;
    padding: 10px;
    width: 100%;
    margin: auto;
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