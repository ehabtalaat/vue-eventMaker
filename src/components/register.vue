<template>
	<div class="body">
		 <div class="loginbox">
    <img src="1.png" class="avatar">
        <h1>register</h1>
        <form>
            <p>email</p>
            <input type="text" name="" placeholder="Enter email" v-model="email">
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password" v-model="password">
            <input type="submit" name="" value="register" @click.prevent="register">
            <div class="alert alert-danger" v-if="error.message"> {{error.message}}</div>
        </form>
       </div> 
	</div>
</template>
<script>
import {fireApp} from "../firebaseApp";
	export default{
	data(){
	return{
		email:'',
		password:'',
		error:{
			message:""
			}
		}
	},
	methods:{
 	register(){
 		fireApp.auth().createUserWithEmailAndPassword(this.email,this.password)
 		.catch((error) => this.error = error);
 	}
	}
	};
</script>
<style scoped>
	.body{
    padding: 0;
    margin: 0px;
    background: url(pic1.jpg);
    background-size: cover;
    background-position: center;
    font-family: sans-serif;
    height: 100vh;
}

.loginbox{
    width: 320px;
    height: 420px;
    background-color:rgba(0,0,0,.6);
    color: #fff;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    padding: 70px 30px;
}

.avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
}

h1{
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 22px;
}

.loginbox p{
    margin: 0;
    padding: 0;
    font-weight: bold;
}

.loginbox input{
    width: 100%;
    margin-bottom: 20px;
}

.loginbox input[type="text"], input[type="password"]
{
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
}
.loginbox input[type="submit"]
{
    border: none;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
   background-image: linear-gradient(to right, red , rgba(255,0,0,.6));
}
.loginbox input[type="submit"]:hover
{
    cursor: pointer;
      background-image: linear-gradient(to right, red , rgba(255,0,0,.8));
    color: #000;

}
.loginbox a{
    text-decoration: none;
    font-size: 12px;
    line-height: 20px;
    color: darkgrey;
}
.loginbox a:hover
{
    color: #ffc107;
}
</style>