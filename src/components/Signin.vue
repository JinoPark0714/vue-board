<template>
	<div class="input-form">
		
		<input v-model="userId" type="text" id="userId" placeholder="Id 6 more than">
		<input v-model="userPassword" type="password" id="userPassword" placeholder="Password 8 more than">

		<button v-on:click="onTest">Sign in</button>
		<router-link to="/signup">
			<button>Sign up</button>
		</router-link>
		
	</div>
</template>

<script>
import axios from 'axios';
import 'regenerator-runtime/runtime';

export default {
	data : function(){
		return{
			userId : '',
			userPassword : ''
		}
	},
	methods : {
		onTest : async function(){
			const params = {
				user_id : this.userId,
				user_password : this.userPassword
			};

			const option = {
				method : "POST",
				headers : {
					"Content-Type" : "application/json"
				}
			};

			const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/user/signin`, params);
			const data = await response.data;
			console.log(data);
		}
		
	}
}
</script>

<style scoped>
	.input-form{
		flex-direction: column;
		display:flex;
		align-items: center;
	}

	input{
		height: 40px;
		line-height:50px;
		border-radius:0.7rem;
		font-size: 15pt;
		text-align: center;
		width: 300px;
		margin : 10px;
	}

	button{
		width: 300px;
		line-height:40px;
		border-radius:0.7rem;
		font-size: 15pt;
		background-color: #000;
		color: #fff;
		margin: 5px;
	}

	button:active{
		background-color:#fff;
		color:#000;
	}
</style>