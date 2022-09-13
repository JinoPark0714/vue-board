<template>
	<div class="input-form">
		<input v-model="userName" type="text" id="userName" placeholder="your name">
		<input v-model="userId" type="text" id="userId" placeholder="Id 6 more than">
		<input v-model="userPassword" type="password" id="userPassword" placeholder="Password 8 more than">
		<input v-model="userPasswordConfirm" type="password" id="userPasswordConfirm" placeholder="password confirm">
		<input v-model="userNickname" type="text" id="userNickname" placeholder="nickname 4 more than">
		<input v-model="userPhoneNumber" type="text" id="userPhoneNumber" placeholder="phone number xxx-xxxx-xxxx">
		<button v-on:click="onSignup()">Sign up</button>

		<router-link to="/signin">
			<button>Cancel</button>
		</router-link>

	</div>
</template>

<script>
import userApi from '../api/user';

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
		onSignup : async function(){
			if(this.userPassword === this.userPasswordConfirm){
				const user = {
					userName : this.userName,
					userId : this.userId,
					userPassword : this.userPassword,
					userNickname : this.userNickname,
					userPhoneNumber : this.userPhoneNumber	
				};
				const { data } = await userApi.signup(user);
				if(data){
					alert("회원가입이 완료됐습니다.");
					return data;
				}
			}
			alert("비밀번호와 비밀번호 확인란이 일치하지 않습니다.");

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

	input:focus{
		outline : none;
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