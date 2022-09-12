<template>
	<div class="input-form">
		<h2>Simple Board</h2>
		<input v-model="userId" type="text" id="userId" placeholder="Id 6 more than">
		<input v-model="userPassword" type="password" id="userPassword" placeholder="Password 8 more than" v-on:keyup.enter="signIn">
		<button v-on:click="signIn">Sign in</button>
		<router-link to="/signup">
			<button>Sign up</button>
		</router-link>
		<router-link to="/">
			<button>To main</button>
		</router-link>
	</div>
</template>

<script>
import axios from 'axios';
import message from '../common/message';
import VueCookies from 'vue-cookies';
import 'regenerator-runtime/runtime';


export default {
	data : function(){
		return{
			userId : '',
			userPassword : ''
		}
	},
	methods : {
		signIn : async function(){
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
			try {
				const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/user/signin`, params, option);
				if(response.status === 201){
					console.log(response.headers['set-cookie']);
					this.$router.push('/');
				}

			} catch (error) {
				console.log(error.message);
				alert(message.NOT_FOUND);
			}
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