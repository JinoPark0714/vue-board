<template>
  <div>
    <div class="text-label-form">
      <div class="label">이름</div>
      <input type="text" v-model="userName">
    </div>
    <div class="text-label-form">
      <div class="label">닉네임</div>
      <div>
        <input type="text" v-model="userNickname">
        <button class="nickname-update">수정하기</button>
      </div>
    </div>
    <div class="text-label-form">
      <div class="label">전화번호</div>
      <input type="text" v-model="userPhoneNumber">
    </div>

    <div class="text-label-form">
      <div class="label">아이디</div>
      <input type="text" v-model="userId">
    </div>

    <div class="button-form">
      <button class="apply-cancel-button">반영하기</button>
      <router-link to='/'>
        <button class="apply-cancel-button">취소하기</button>
      </router-link>


    </div>
    
  </div>  
</template>

<script>
import { getProfile } from '../api/user/user';
export default {
  data : function(){
    return {
      userName : '',
      userNickname : '',
      userPhoneNumber : '',
      userId : ''
    }
  },
  methods : {
  },
  
  // 컴포넌트가 마운트될 때 사용
  // 좀 더 쉽게 말하면 컴포넌트가 호출 될 때 사용
  mounted (){
    this.$nextTick( async () => {
      const userId = 'worhs';
      const {user_name, user_nickname, user_phone_number} = await getProfile(userId);
      this.$data.userName = user_name;
      this.$data.userNickname = user_nickname;
      this.$data.userPhoneNumber = user_phone_number;
    });

  }
}
</script>

<style scoped>

	input{
		width: 150px;
    height: 25px;
		line-height:50px;
		border-radius:0.4rem;
    border: 1px solid #222222;
		font-size: 12pt;
    
		text-align: left;
		margin : 3px;
	}

  .text-label-form{
    display:flex;
    flex-direction: column;
    margin: 10px;
  }
  
  .label{
    margin: 3px;
  }

  .nickname-update{
    width: 100px;
    height: 30px;
    border-radius:0.3rem;
		font-size: 13pt;
		background-color: #000;
    border: 1px solid #000;
		color: #fff;
		margin: 5px;
  }
  .nickname-update:active{
    background-color: #f6f6f6;
    color: #222222;
  }

  .button-form{
    flex-direction: row;
    display:flex;
  }
  
  .apply-cancel-button{
    width: 150px;
    height: 30px;
    border-radius:0.3rem;
		font-size: 13pt;
		background-color: #000;
    border: 1px solid #000;
		color: #fff;
		margin: 5px;
  }

</style>