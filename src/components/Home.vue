<template>
    <div>
      <h1 v-if="user">Welcome {{ userName }}</h1>
      <div v-if="loading" class="loading">
        <div class="spinner"></div>
      </div>
      <div v-else class="products">
        <ul v-for="product in result['data']" :key="product.id">
          <div class="product">
            <img :src="product.image" :alt="product.title" :width="200">
            <h2>{{ product.title }}</h2>
            <h2>Price: {{ product.price }}$</h2>
            <button v-if="!cart[product.id]" @click="addToCart(product)">Add to cart</button>
            <div v-else class="addmore">
              <button @click="changeQuantity(product.id, -1)">-</button>
              <p>{{ cart[product.id].quantity }}</p>
              <button @click="changeQuantity(product.id, 1)">+</button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/app';
  import 'firebase/database'
  import 'firebase/firestore'
  import { db } from '@/main'
  import axios from 'axios';
  
  export default {
    name: 'HomeComp',
    data() {
      return {
        user: null,
        result: [],
        userName: "",
        cart: {},
        loading: true,
      }
    },
  
    methods: {
      changeQuantity(productId, x) {
        if (this.cart[productId].quantity + x < 1) {
          this.cart[productId].quantity = 0;
        } else {
          this.cart[productId].quantity += x;
        }
        const currentUser = firebase.auth().currentUser;
        if (this.cart[productId].quantity == 0 && currentUser) {
          db.collection('userCart').doc(currentUser.uid).update({
            [productId]: firebase.firestore.FieldValue.delete()
          }).then(() => {
            return db.collection('userCart').doc(currentUser.uid).get();
          }).then((doc) => {
            this.cart = doc.data();
          }).catch((error) => {
            console.error("Error updating user cart: ", error);
          });
        } else {
          db.collection('userCart').doc(this.user.uid).set(this.cart);
        }
      },
  
      addToCart(product){
        const currentUser = firebase.auth().currentUser;
        if (currentUser) {
          const cartRef = db.collection('userCart').doc(currentUser.uid);
          cartRef.get().then((doc) => {
            if (doc.exists) {
              const cart = doc.data();
              if (cart[product.id]) {
                cartRef.update({
                  [`${product.id}.quantity`]: firebase.firestore.FieldValue.increment(1)
                }).then(() => {
                  this.cart = cartRef.get().data();
                }).catch((error) => {
                  console.error("Error updating user cart: ", error);
                });
              } else {
                cartRef.set({
                  [product.id]: {
                    name: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                  }
                }, { merge: true }).then(() => {
                  return cartRef.get();
                }).then((updatedDoc) => {
                  this.cart = updatedDoc.data();
                }).catch((error) => {
                  console.error("Error updating user cart: ", error);
                });
              }
            } else {
                throw new Error("Document does not exist!");
      }
            }).catch((error) => {
            console.error("Error updating user cart: ", error);
            });
        } else {
            this.$router.push('/login');
        }
        },

        present(productId) {
        return productId in this.cart;
        }
        },

        beforeMount() {
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        this.user = user;
        firebase.database().ref('users/' + user.uid).on('value', (snapshot) => {
        this.userName = snapshot.val().name;
        localStorage.setItem('name', this.userName);
        });
        } else {
        this.$router.push('/login');
        }
        });
        this.loading = true;
        },

        async mounted() {
        setTimeout(() => {
        this.loading = false;
        }, 1000);

        this.result = await axios.get('https://fakestoreapi.com/products');

        db.collection('userCart').doc(this.user.uid).get().then((doc) => {
        if (doc.exists) {
            this.cart = doc.data();
        }
        });
        }
        }
</script>  