<template>
	<div>
		 <!--nav bar from boostrap 4-->
          <nav class="navbar navbar-expand-lg navbar-light">
          	<div class="container">
          		
            <a class="navbar-brand" href="#">Event Maker</span></a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link"  href="#" @click.prevet="logout"
                    >logout</a
                  >
                </li>
               
              </ul>
            </div>
        </div>
          </nav>
		<addevent></addevent>
		<div class="container">
		<div class="row">		<eventitem 
		v-for="event in this.$store.state.events"
		:key="event.title"
		:event="event"></eventitem></div></div>	</div>
</template>
<script>
import {fireApp,fireEvent} from "../firebaseApp";
import addevent from "./AddEvents";
import eventitem from "./eventitem";
 export default{
 	components:{
 		addevent,
 		eventitem
 	},
methods:{
   logout(){
   	this.$store.dispatch("logout")
   	fireApp.auth().signOut();
   }
	},
	mounted(){
		fireEvent.on('value',snap =>{
			let events  = [];
			snap.forEach(event => {
				events.push(event.val())
			})
			this.$store.dispatch("setevents",events);
		})
	}
};
</script>
<style scoped>
	nav{
		background-color: #68b0ab;
		opacity: .7;
	}
	.navbar-brand{
		color:#59405c !important;
		font-weight: bold;
		font-style: italic;
		font-size: 1.4rem;
	}
	.nav-link{
		color: #59405c !important;
		font-weight: bold;
		font-size: 1.1rem;
		font-style: italic;
	}
</style>