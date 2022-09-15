<template>
	<div class="body-form">
		<div class="input-form">
			<div>성명</div>
			<input v-model="userName" type="text" id="userName">
		</div>
		<div class="input-form">
			<div>아이디</div>
			<input v-model="userId" type="text" id="userId" placeholder="6 more than">
		</div>
		<div class="input-form">
			<button v-on:click="onCheckDuplication()">ID 중복 체크</button>
		</div>
		<br><br><br>
		<div class="input-form">
			<div>비밀번호</div>
			<input v-model="userPassword" type="password" id="userPassword" placeholder="8 more than">
		</div>
		<div class="input-form">
			<div>비밀번호 확인</div>
			<input v-model="userPasswordConfirm" type="password" id="userPasswordConfirm">
		</div>
		<div class="input-form">
			<div>닉네임</div>
			<input v-model="userNickname" type="text" id="userNickname" placeholder="4 more than">
		</div>
		<div class="input-form">
			<div>전화번호</div>
			<input v-model="userPhoneNumber" type="text" id="userPhoneNumber" placeholder="xxx-xxxx-xxxx">
		</div>
		
		<button v-on:click="onSignup()">회원가입</button>

		<router-link to="/signin">
			<button>취소</button>
		</router-link>

	</div>
</template>

<script>
import userApi from '../api/user/user';

export default {
	data : function(){
		return {
			userName : '',
			userId : '',
			userPassword : '',
			userPasswordConfirm : '',
			userNickname : '',
			userPhoneNumber : '',
			isChecked : this.$store.state.isChecked
		}
	},
	methods : {
		// 회원 가입
		onSignup : async function(){
			if(this.userPassword === this.userPasswordConfirm){
				const user = {
					userName : this.userName,
					userId : this.userId,
					userPassword : this.userPassword,
					userNickname : this.userNickname,
					userPhoneNumber : this.userPhoneNumber,
					isChecked : this.isChecked
				};
				const { data } = await userApi.signup(user);
				if(data)
					alert("회원가입이 완료됐습니다.");
				
				return data;
			}
			alert("비밀번호와 비밀번호 확인란이 일치하지 않습니다.");
		},

		// 중복 체크 이벤트
		onCheckDuplication : async function(){
			const { data } = await userApi.checkDuplication(this.userId);
			if(!data){
				alert("이미 존재하는 ID입니다.");
				return 0;
			}
			alert("사용 가능한 ID입니다.");
			this.setIsChecked(true);
			return 0;
		},

		/**
		 * set true or false
		 * @param {boolean} value true or false
		 */
		setIsChecked : function(value){
			this.$data.isChecked = value;
		}
	},
};
</script>

<style scoped>
	.body-form{
		flex-direction: column;
		display:flex;
		justify-content: center;
		align-items: center;
		margin: 5px;
	}

	.input-form{
		flex-direction: column;
		display:flex;
		align-self: center;
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