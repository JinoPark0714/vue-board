<template>
  <div>
    <router-link to="/signin">
      <button>sign in</button>
    </router-link>
    <button v-on:click="postBoard">글 쓰기</button>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  methods : {
    postBoard : async function(){
      const cookie = this.$cookies.get("accessToken");
      console.log(cookie);
      if(cookie){
        const expired = await this.validate(cookie);
        if(!expired)        
          this.redirect('post')
        else{
          alert("토큰이 만료됐습니다. 다시 로그인해주세요.");
          this.$router.push('/signin');
        }
      }
      else
        this.redirect('/signin');
    },
    
    validate : async function(token) {
      const option = {
        headers : {
          "Content-Type" : "application/json",
        }
      };
      const params = {accessToken : token};

      try {
        const {data} = await axios.post(`${process.env.VUE_APP_BASE_URL}/auth/verify`, params, option);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    redirect : function(url){
      this.$router.push(url);
    }
  }
}
</script>
<style scoped>
  
</style>