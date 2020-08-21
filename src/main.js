// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  { fireApp} from "./firebaseApp";
import store from "./store/index.js"
Vue.config.productionTip = false

fireApp.auth().onAuthStateChanged(user => {
	if (user){
		store.dispatch("signin",user);
	router.push("/dashboard").catch(()=>{});
	}
	else{
		router.replace("/signin");
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App  },
 render: h =>h(App)
  
})
