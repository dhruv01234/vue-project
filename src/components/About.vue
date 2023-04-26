<template>
    <div>
        <h1>About</h1>
    </div>
</template>

<script>
import firebase from 'firebase/app';
    export default {
        name:"AboutComp",
        beforeMount(){
            firebase.auth().onAuthStateChanged((user)=>{
                    if(user) this.user = user;
                    else{
                        this.$router.push('/login')
                    }
                })
        },
    }
</script>

<style scoped>

</style>