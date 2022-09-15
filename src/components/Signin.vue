<template>
	<div class="input-form">
		<h2>Simple Board</h2>
		<input v-model="userId" type="text" id="userId" placeholder="Id 6 more than">
		<input v-model="userPassword" type="password" id="userPassword" placeholder="Password 8 more than" v-on:keyup.enter="onSignin">
		<button v-on:click="onSignin">Sign in</button>
		<router-link to="/signup">
			<button>Sign up</button>
		</router-link>
		<router-link to="/">
			<button>To main</button>
		</router-link>
	</div>
</template>

<script>
import VueCookies from 'vue-cookies';
import 'regenerator-runtime/runtime';
import userApi from '../api/user/user';

export default {
	data : function(){
		return{
			userId : '',
			userPassword : ''
		}
	},
	methods : {
		onSignin : async function(){
			const { data } = await userApi.signin(this.userId, this.userPassword);
			console.log(data);
		},
		
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
		border-radius:0.4rem;
		font-size: 15pt;
		text-align: center;
		width: 300px;
		margin : 10px;
	}

	button{
		width: 300px;
		line-height:40px;
		border-radius:0.4rem;
		font-size: 15pt;
		background-color: #222222;
		color: #f6f6f6;
		margin: 5px;
	}

	button:active{
		background-color:#f6f6f6;
		color:#222222;
	}
</style>