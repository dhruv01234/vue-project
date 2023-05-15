<template>
    <h1 v-if="user">Welcome {{userName}}</h1>
    <div v-if="loading" class="loading">
        <div class="spinner"></div>
    </div>
    <div v-else class="products">
        <ul v-for="product in result['data']" :key="product.id">
            <div class="product">
                <img :src="product.image" :alt="product.title" :width="200">
                <h2>{{ product.title }}</h2>
                <h2>Price : {{ product.price }}$</h2>
                <button v-if="!cart[product.id]" v-on:click="addToCart(product)">Add to cart</button>
                <div v-else class="addmore">
                    <button v-on:click="changeQuantity(product.id,-1)">-</button>
                    <p>{{ cart[product.id].quantity }}</p>
                    <button v-on:click="changeQuantity(product.id,1)">+</button>
                </div>
            </div>
            
        </ul>
    </div>
</template>
    
    <script>
    import firebase from 'firebase/app';
    import 'firebase/database'
    import 'firebase/firestore'
    import {db} from '@/main'
    import axios from 'axios';
    export default{
        name:'HomeComp',
        data(){
            return {
                user:null,
                result:[],
                userName:"",
                cart:{},
                loading:true,
            }
        },
        computed:{
           
        },
        methods:{  
            changeQuantity(productId,x){
                this.cart[productId].quantity += x;
                const currentUser = firebase.auth().currentUser;
                if(this.cart[productId].quantity==0 && currentUser){
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
            addToCart(product){
                const currentUser = firebase.auth().currentUser;
                if(currentUser){
                    db.collection('userCart').doc(currentUser.uid).get().then((doc)=>{
                        if(doc.exists){
                            this.cart = doc.data();
                            
                            if(this.cart[product.id]){
                                this.cart[product.id].quantity++;
                            }
                            else{
                                this.cart[product.id]={
                                    name:product.title,
                                    price: product.price,
                                    image:product.image,
                                    quantity: 1
                                }
                            }
                            db.collection('userCart').doc(currentUser.uid).set(this.cart);
                        }
                        else{
                            this.cart[product.id] = {
                                name:product.title,
                                price: product.price,
                                image:product.image,
                                quantity: 1
                            }
                            db.collection('userCart').doc(currentUser.uid).set(this.cart)
                        }
                    })
                    
                }
                else{
                    this.$router,push('/login')
                }
            },
            present(productId){
                
                return productId in this.cart;
            }
        },
        beforeMount(){
            firebase.auth().onAuthStateChanged((user)=>{
                    if(user){
                        this.user = user;
                        firebase.database().ref('users/'+user.uid).on('value',(snapshot)=>{
                            this.userName = snapshot.val().name;
                            localStorage.setItem('name',this.userName);
                        })
                    }
                    else{
                        this.$router.push('/login')
                    }
                })
                this.loding = true;
        },
        async mounted(){
            setTimeout(() => {
                this.loading=false
            }, 1000)
            this.result = await axios.get('https://fakestoreapi.com/products')
            db.collection('userCart').doc(this.user.uid).get().then((doc)=>{
                if(doc.exists){
                    this.cart = doc.data();
                }
            })
            
        },
    
    }
    </script>