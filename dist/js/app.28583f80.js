(function(){"use strict";var t={7461:function(t,e,n){n.d(e,{db:function(){return At}});var a=n(9242),r=n(3396);const o={class:"content"};function i(t,e,n,a,i,u){const s=(0,r.up)("NavComp"),l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r._)("div",o,[(0,r.Wm)(l)])],64)}const u={key:0,class:"nav"},s={class:"routes"},l={class:"logout-nav"};function c(t,e,n,a,o,i){const c=(0,r.up)("router-link");return o.user?((0,r.wg)(),(0,r.iD)("nav",u,[(0,r._)("div",s,[(0,r.Wm)(c,{class:"nav-link",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Wm)(c,{class:"nav-link",to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Wm)(c,{class:"nav-link",to:"/cart"},{default:(0,r.w5)((()=>[(0,r.Uk)("Cart")])),_:1})]),(0,r._)("div",l,[(0,r._)("button",{class:"logout",onClick:e[0]||(e[0]=(...t)=>i.logout&&i.logout(...t))},"Logout")])])):(0,r.kq)("",!0)}n(7658);var d=n(186),h=n.n(d),m={name:"NavComp",data(){return{home:"home",about:"about",user:null}},beforeMount(){h().auth().onAuthStateChanged((t=>{this.user=t}))},methods:{logout(){h().auth().signOut().then((()=>{this.$router.push("/login")})).catch((t=>{alert(t.message)}))}}},p=n(89);const g=(0,p.Z)(m,[["render",c]]);var f=g,v={name:"App",components:{NavComp:f}};const b=(0,p.Z)(v,[["render",i]]);var _=b,w=n(2483),y=n(7139);const C={key:0},k={class:"products"},D={class:"product"},A=["src","alt"],O=["onClick"],S={key:1,class:"addmore"},U=["onClick"],q=["onClick"];function M(t,e,n,a,o,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[o.user?((0,r.wg)(),(0,r.iD)("h1",C,"Welcome "+(0,y.zw)(o.userName),1)):(0,r.kq)("",!0),(0,r._)("div",k,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.result["data"],(t=>((0,r.wg)(),(0,r.iD)("ul",{key:t.id},[(0,r._)("div",D,[(0,r._)("img",{src:t.image,alt:t.title,width:200},null,8,A),(0,r._)("h2",null,(0,y.zw)(t.title),1),(0,r._)("h2",null,"Price : "+(0,y.zw)(t.price)+"$",1),o.cart[t.id]?((0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("button",{onClick:e=>i.changeQuantity(t.id,-1)},"-",8,U),(0,r._)("p",null,(0,y.zw)(o.cart[t.id].quantity),1),(0,r._)("button",{onClick:e=>i.changeQuantity(t.id,1)},"+",8,q)])):((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:e=>i.addToCart(t)},"Add to cart",8,O))])])))),128))])],64)}n(4939),n(8307);var P=n(3680),$={name:"HomeComp",data(){return{user:null,result:[],userName:"",cart:{}}},computed:{},methods:{changeQuantity(t,e){this.cart[t].quantity+=e;const n=h().auth().currentUser;0==this.cart[t].quantity&&n?(At.collection("userCart").doc(n.uid).update({[t]:h().firestore.FieldValue["delete"]()}),At.collection("userCart").doc(n.uid).get().then((t=>{this.cart=t.data()}))):At.collection("userCart").doc(this.user.uid).set(this.cart)},addToCart(t){const e=h().auth().currentUser;e?At.collection("userCart").doc(e.uid).get().then((n=>{n.exists?(this.cart=n.data(),this.cart[t.id]?this.cart[t.id].quantity++:this.cart[t.id]={name:t.title,price:t.price,image:t.image,quantity:1},At.collection("userCart").doc(e.uid).set(this.cart)):(this.cart[t.id]={name:t.title,price:t.price,image:t.image,quantity:1},At.collection("userCart").doc(e.uid).set(this.cart))})):(this.$router,push("/login"))},present(t){return t in this.cart}},beforeMount(){h().auth().onAuthStateChanged((t=>{t?(this.user=t,h().database().ref("users/"+t.uid).on("value",(t=>{this.userName=t.val().name,localStorage.setItem("name",this.userName)}))):this.$router.push("/login")}))},async mounted(){this.result=await P.Z.get("https://fakestoreapi.com/products"),At.collection("userCart").doc(this.user.uid).get().then((t=>{t.exists&&(this.cart=t.data())}))}};const x=(0,p.Z)($,[["render",M]]);var I=x;const W=(0,r._)("h1",null,"About",-1),Z=[W];function j(t,e,n,a,o,i){return(0,r.wg)(),(0,r.iD)("div",null,Z)}var z={name:"AboutComp",beforeMount(){h().auth().onAuthStateChanged((t=>{t?this.user=t:this.$router.push("/login")}))}};const H=(0,p.Z)(z,[["render",j]]);var L=H;const N=t=>((0,r.dD)("data-v-17cbb6ce"),t=t(),(0,r.Cn)(),t),Q=N((()=>(0,r._)("h1",null,"Login",-1))),V=N((()=>(0,r._)("br",null,null,-1))),R=N((()=>(0,r._)("br",null,null,-1)));function T(t,e,n,o,i,u){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("form",{class:"login",onSubmit:e[3]||(e[3]=(0,a.iM)(((...t)=>u.login&&u.login(...t)),["prevent"]))},[Q,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>i.email=t)},null,512),[[a.nr,i.email]]),V,(0,r.wy)((0,r._)("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>i.pass=t)},null,512),[[a.nr,i.pass]]),R,(0,r._)("button",{type:"submit",onClick:e[2]||(e[2]=(...e)=>t.Login&&t.Login(...e))},"Login"),(0,r._)("h3",null,[(0,r.Uk)("Need a account? "),(0,r.Wm)(s,{to:"/register"},{default:(0,r.w5)((()=>[(0,r.Uk)("Register here")])),_:1})])],32)}n(5866);var E={name:"LoginComp",data(){return{email:"",pass:""}},beforeMount(){h().auth().onAuthStateChanged((t=>{t&&this.$router.push("/")}))},methods:{async login(){try{await h().auth().signInWithEmailAndPassword(this.email,this.pass),this.$router.push("/")}catch(t){alert(t.message)}}}};const Y=(0,p.Z)(E,[["render",T],["__scopeId","data-v-17cbb6ce"]]);var K=Y;const F=t=>((0,r.dD)("data-v-68bbce5a"),t=t(),(0,r.Cn)(),t),G={class:"register"},X=F((()=>(0,r._)("h1",null,"Register",-1))),B=F((()=>(0,r._)("label",{for:"name"},"Name:",-1))),J=F((()=>(0,r._)("br",null,null,-1))),tt=F((()=>(0,r._)("label",{for:"email"},"Email:",-1))),et=F((()=>(0,r._)("br",null,null,-1))),nt=F((()=>(0,r._)("label",{for:"password"},"Password:",-1))),at=F((()=>(0,r._)("br",null,null,-1))),rt=F((()=>(0,r._)("button",{type:"submit"},"Register",-1)));function ot(t,e,n,o,i,u){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",G,[X,(0,r._)("form",{onSubmit:e[3]||(e[3]=(0,a.iM)(((...t)=>u.register&&u.register(...t)),["prevent"]))},[B,(0,r.wy)((0,r._)("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=t=>i.name=t),required:""},null,512),[[a.nr,i.name]]),J,tt,(0,r.wy)((0,r._)("input",{type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=t=>i.email=t),required:""},null,512),[[a.nr,i.email]]),et,nt,(0,r.wy)((0,r._)("input",{type:"password",id:"password","onUpdate:modelValue":e[2]||(e[2]=t=>i.password=t),required:""},null,512),[[a.nr,i.password]]),at,rt,(0,r._)("h3",null,[(0,r.Uk)("Have a account? "),(0,r.Wm)(s,{to:"/login"},{default:(0,r.w5)((()=>[(0,r.Uk)("Login here")])),_:1})])],32)])}var it={name:"RegisterComp",data(){return{email:"",password:"",name:""}},beforeMount(){h().auth().onAuthStateChanged((t=>{t&&this.$router.push("/")}))},methods:{register(){h().auth().createUserWithEmailAndPassword(this.email,this.password).then((t=>{const e=t.user;h().database().ref("users/"+e.uid).set({name:this.name,email:this.email,uid:e.uid}),this.$router.push("/")})).catch((t=>{alert(t.message)}))}}};const ut=(0,p.Z)(it,[["render",ot],["__scopeId","data-v-68bbce5a"]]);var st=ut;const lt=t=>((0,r.dD)("data-v-3e9a61fc"),t=t(),(0,r.Cn)(),t),ct=lt((()=>(0,r._)("h1",null,"Cart",-1))),dt={class:"cart"},ht=["src","alt"],mt={class:"addmore"},pt=["onClick"],gt=["onClick"],ft=["onClick"];function vt(t,e,n,a,o,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[ct,(0,r._)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.cart,((t,e)=>((0,r.wg)(),(0,r.iD)("ul",{key:e},[(0,r._)("div",dt,[(0,r._)("img",{src:t.image,alt:t.name,width:200},null,8,ht),(0,r._)("h2",null,(0,y.zw)(t.name),1),(0,r._)("h2",null,"Price : "+(0,y.zw)(t.price)+"$",1),(0,r._)("div",mt,[(0,r._)("button",{onClick:t=>i.changeQuantity(e,-1)},"-",8,pt),(0,r._)("p",null,(0,y.zw)(t.quantity),1),(0,r._)("button",{onClick:t=>i.changeQuantity(e,1)},"+",8,gt),(0,r._)("button",{onClick:t=>i.changeQuantity(e,0)},"Remove",8,ft)])])])))),128))])],64)}var bt={name:"CartComp",data(){return{cart:[]}},methods:{changeQuantity(t,e){0===e?this.cart[t].quantity=0:this.cart[t].quantity+=e;const n=h().auth().currentUser;0===this.cart[t].quantity&&n?(At.collection("userCart").doc(n.uid).update({[t]:h().firestore.FieldValue["delete"]()}),At.collection("userCart").doc(n.uid).get().then((t=>{this.cart=t.data()}))):At.collection("userCart").doc(this.user.uid).set(this.cart)}},beforeMount(){h().auth().onAuthStateChanged((t=>{t?(this.user=t,At.collection("userCart").doc(t.uid).get().then((t=>{t.exists&&(this.cart=t.data())}))):this.$router.push("/login")}))}};const _t=(0,p.Z)(bt,[["render",vt],["__scopeId","data-v-3e9a61fc"]]);var wt=_t;const yt=[{name:"HomeComp",path:"/",component:I},{name:"AboutComp",path:"/about",component:L},{name:"CartComp",path:"/cart",component:wt},{name:"Login",path:"/login",component:K},{name:"Register",path:"/register",component:st}],Ct=(0,w.p7)({history:(0,w.PO)(),routes:yt});var kt=Ct;const Dt={apiKey:"AIzaSyAlrbdsXd_Psxw_ca76GhOo-79ifZQwZEM",authDomain:"vue-auth-e1279.firebaseapp.com",projectId:"vue-auth-e1279",storageBucket:"vue-auth-e1279.appspot.com",messagingSenderId:"816112554908",appId:"1:816112554908:web:217ea44a02443eb2e9ee59",measurementId:"G-LV7QK9MX0C"};h().initializeApp(Dt),(0,a.ri)(_).use(kt).mount("#app");const At=h().firestore()}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,o){if(!a){var i=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],o=t[c][2];for(var u=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[s])}))?a.splice(s--,1):(u=!1,o<i&&(i=o));if(u){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[a,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,i=a[0],u=a[1],s=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var c=s(n)}for(e&&e(a);l<i.length;l++)o=i[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},a=self["webpackChunknewvue"]=self["webpackChunknewvue"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7461)}));a=n.O(a)})();
//# sourceMappingURL=app.28583f80.js.map