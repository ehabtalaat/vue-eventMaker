<template>
	<div class="container">
	<div class="col-md-8 ">
	<div class="card">
		<div class="card-header">
			<h2>add event <input type="checkbox" v-model="show"> </h2>
		</div>
		<div class="card-body" v-if="show">
				<div class="form-group">
					<label>title</label>
					<input type="text" v-model="event.title" class="form-control">
				</div>
				<div class="form-group">
					<label>date</label>
					<input type="date" v-model="event.date" class="form-control">
				</div>
				<div class="form-group">
					<label>location</label>
					<input type="text" v-model="event.location" class="form-control">
				</div>
				<div class="form-group">
					<label>description</label>
					<textarea class="form-control" v-model="event.description" rows=6></textarea>
				</div>
			<button class="btn btn-primary" @click="addevent">add event</button>
		</div>
			</div>
</div>
</div>
</template>
<script>
import {fireEvent} from "../firebaseApp";
	export default{
	 data(){
	 	return{
	 		event:{
	 			title:"",
	 			date:"",
	 			location:"",
	 			description:"",
	 			email:"",
	 		},
	 		show:false,
	 	}
		},
		methods:{
			addevent(){
				this.event.email = this.$store.state.user.email;
				fireEvent.push(this.event);
			}
		}
	};
</script>
<style scoped>
	.card{
		margin-top: 60px;
		margin-bottom: 60px;
	}
	.card-header{
		background-color: #68b0ab;
		opacity: .7;
	}
	.card-header h2{
		color:#59405c !important;
		font-weight: bold;
		font-style: italic;
		font-size: 1.7rem;
	}
	label{
		color:#59405c !important;
		font-style: italic;
		font-size: 1.1rem;
		font-weight: bold;
	}
	button{
		background-color: #68b0ab !important;
		text-align: center;
		font-weight: bold;
		font-size: 1.2rem;
		color: #59405c;
		border: none;
		border-radius: 15px;
	}
</style>