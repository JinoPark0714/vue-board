<template>
  <div>
    <div class="text-label-form">
      <div for="userName">이름</div>
      <input type="text" v-model="userName">
    </div>
    <div class="text-label-form">
      <div for="userName">닉네임</div>
      <div>
        <input type="text" v-model="userNickname">
        <button class="nickname-update">수정하기</button>
      </div>
    </div>
    <div class="text-label-form">
      <div for="userName">전화번호</div>
      <input type="text" v-model="userPhoneNumber">
    </div>
    
  </div>  
</template>

<script>
import axios from 'axios';
export default {
  data : function(){
    return {
      userName : '재고니즘',
      userNickname : '카카로트',
      userPhoneNumber : '010-1234-1111'
    }
  },
  methods : {
    onLoad : async function(){
      const option = {
        method : 'POST',
        headers : {
          "Content-Type" : "applicaton/json"
        }
      };
      const {data, status} = await axios.post(`${process.env.VUE_APP_BASE_URL}/user`, null, option);
      console.log(data, status);
      return data;
    }
  },
  mounted (){
    console.log("생성되었다!");
  }
}
</script>

<style scoped>

	input{
		height: 30px;
		line-height:50px;
		border-radius:0.4rem;
		font-size: 15pt;
		text-align: center;
		width: 150px;
		margin : 10px;
	}

  .text-label-form{
    display:flex;
    flex-direction: column;
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

</style>