<template>
	<div class="input-form">
		<input v-model="userName" type="text" id="userName" placeholder="your name">
		<input v-model="userId" type="text" id="userId" placeholder="Id 6 more than">
		<input v-model="userPassword" type="password" id="userPassword" placeholder="Password 8 more than">
		<input v-model="userPasswordConfirm" type="password" id="userPasswordConfirm" placeholder="password confirm">
		<input v-model="userNickname" type="text" id="userNickname" placeholder="nickname 4 more than">
		<input v-model="userPhoneNumber" type="text" id="userPhoneNumber" placeholder="phone number xxx-xxxx-xxxx">
		<button v-on:click="onTest()">Sign up</button>

		<router-link to="/">
			<button>Cancel</button>
		</router-link>

	</div>
</template>

<script>
import axios from 'axios';
import 'regenerator-runtime/runtime';
export default {
	data : function(){
		return {
			userName : '',
			userId : '',
			userPassword : '',
			userPasswordConfirm : '',
			userNickname : '',
			userPhoneNumber : ''
		}
	},
	methods : {
		onTest : async function(){
			const option = {
				method : 'POST',
				headers : {
					"Content-Type" : "application/json"
				},
				body : {
					user_id : this.userId,
					user_password : this.userPassword,
					user_name : this.userName,
					user_nickname : this.userNickname,
					user_phone_number : this.userPhoneNumber
				}
			};
			const response =  await axios.post(`${process.env.VUE_APP_BASE_URL}/user`, option);
			const {data} = await response;
			console.log(data);
		}
	}
};
</script>

<style scoped>
	.input-form{
		flex-direction: column;
		display:flex;
		align-items: center;
	}

	.input-button{
		flex-direction: row;
		display:flex;
		width:300px;
		justify-content:space-evenly;
		border-radius :1px solid #eee;
	}

	input:focus{
		outline : none;
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