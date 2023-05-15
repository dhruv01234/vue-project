<template>
    <div v-if="loading" class="loading">
        <div class="spinner"></div>
    </div>
    <div v-else>
        <h1>About</h1>
    </div>
</template>

<script>
import firebase from 'firebase/app';
    export default {
        
        name:"AboutComp",
        data(){
            return {
                loading:true,
            }
        },
        beforeMount(){
            firebase.auth().onAuthStateChanged((user)=>{
                    if(user) this.user = user;
                    else{
                        this.$router.push('/login')
                    }
                })
                this.loading = true;
        },
        mounted(){
            setTimeout(()=>{
                this.loading = false;
            },1000)
        }
    }
</script>

<style scoped>

</style>