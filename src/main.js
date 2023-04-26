import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAlrbdsXd_Psxw_ca76GhOo-79ifZQwZEM",
  authDomain: "vue-auth-e1279.firebaseapp.com",
  projectId: "vue-auth-e1279",
  storageBucket: "vue-auth-e1279.appspot.com",
  messagingSenderId: "816112554908",
  appId: "1:816112554908:web:217ea44a02443eb2e9ee59",
  measurementId: "G-LV7QK9MX0C"
};

firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
export const db = firebase.firestore();