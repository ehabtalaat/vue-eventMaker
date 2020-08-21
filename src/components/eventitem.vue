<template>
	<div class="col-md-4">
	<div class="card" id="card">
			<h3 class="card-title text-center">{{event.title}}</h3>
			<p class="date">{{event.date}}</p>
			<div>{{ event.description }}</div>
			<p>at: {{event.location}}</p>
			<h6>your host:{{event.email}}</h6>
</div>
</div>
</template>
<script >
	export default{
  props:[
  	"event"
  ]
  /* eslint-disable */
	};
</script>
<style scoped>
	h3{
		margin-top:4px;
		font-size: 1.7rem;
		font-weight: bold;
		font-style: italic;
		color: #59405c;
	}
	.date{
		font-size: 1.1rem;
		color:#59405c;
		text-align: center;
		font-style: italic;
	}
	div{
		color: #333;
		padding-left: 3px;
		font-style: italic;
		padding-left: 7px;
	}
	h6{
		font-style: italic;
		padding-left: 7px;
		color: #59405c;
		font-weight: 2rem;
		font-size: 1.1rem;
	}
	p{
		font-size: 1.1rem;
		color:#59405c;
		font-style: italic;
	}
	#card{
		border-radius: 15px;
		border: none;
		background-color: #68b0ab;
		margin-top: 20px;
	}
</style>