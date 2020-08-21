import Vue from 'vue'
import Router from 'vue-router'
import signin from "../components/signin"
import register from "../components/register"
import dashboard from "../components/dashboard"
Vue.use(Router)

export default new Router({
	 mode:"history",
  routes: [
   {
   	path:"/signin",
   	component:signin,
   	name:"signin"
   },
    {
   	path:"/dashboard",
   	component:dashboard,
   	name:"dashboard"
   },
   {
        path:"/register",
    component:register,
    name:"register"
   }
  ]
})
