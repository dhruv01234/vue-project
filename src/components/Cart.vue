<template>
    <h1>Cart</h1>
    <div>
        <ul v-for="(product,id) in cart" :key="id">
            <div class="cart">
                <img :src="product.image" :alt="product.name" :width="200">
                <h2>{{ product.name }}</h2>
                <h2>Price : {{ product.price }}$</h2>
                    <div class="addmore">
                        <button v-on:click="changeQuantity(id,-1)">-</button>
                        <p>{{ product.quantity }}</p>
                        <button v-on:click="changeQuantity(id,1)">+</button>
                        <button v-on:click="changeQuantity(id,0)">Remove</button>
                    </div>
            </div>
        </ul>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import {db} from '@/main';
    export default {
        name:'CartComp',
        data(){
            return{
                cart:[],
            }
        },
        methods:{
            changeQuantity(productId,x){
                if(x===0){
                    this.cart[productId].quantity=0;
                }
                else{
                    this.cart[productId].quantity += x;
                }
                const currentUser = firebase.auth().currentUser;
                if(this.cart[productId].quantity===0 && currentUser){
                    db.collection('userCart').doc(currentUser.uid).update({
                        [productId]:firebase.firestore.FieldValue.delete()
                       
                    })
                    db.collection('userCart').doc(currentUser.uid).get().then((doc)=>{
                            this.cart = doc.data();
                        })
                }
                else
                db.collection('userCart').doc(this.user.uid).set(this.cart);
            },
        },
        beforeMount(){
            firebase.auth().onAuthStateChanged((user)=>{
                    if(user){
                        this.user = user;
                        db.collection('userCart').doc(user.uid).get().then((doc)=>{
                            if(doc.exists){
                                this.cart = doc.data();
                            }
                        })
                    }
                    else{
                        this.$router.push('/login')
                    }
                })
                
        },
    }
</script>
<style scoped>
.cart{
        border: solid black 3px;
        background-color: #f2f2f2;
        width: 30%;
        padding: 20px;
        text-align: center;
        height: max-content;
    }
</style>