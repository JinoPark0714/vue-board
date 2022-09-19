<template>
	<div>
		<h2>Post</h2>
		<header>
			<div>제목</div>
			<input v-model="boardTitle" type="text">
		</header>
		<article>
			<div>내용</div>
			<textarea v-model="boardText" v-on:keyup.enter="onPost"></textarea>
		</article>
		<footer>
			<router-link to="/">
				<button>취소</button>
			</router-link>

			<button v-on:click="onPost">완료</button>
		</footer>
		
	</div>
</template>

<script>
import 'regenerator-runtime/runtime';
import { postBoard } from '../api/board/board';

export default {
	data : function(){
		return{
			boardText : '',
			boardTitle : '',
			boardDate : ''
		}
	},
	methods : {
		t : function(){
			console.log(this.boardText);
			console.log(this.boardTitle);
			console.log(this.getDate());
		},
		onPost : async function(){
			const {accessToken, refreshToken} = localStorage;
			this.$data.boardDate = this.getDate();
			const params = {
				board_title  : this.boardTitle,
				board_text : this.boardText,
				board_date : this.boardDate
			};
			const result = await postBoard(accessToken, refreshToken, params);
			console.log(result);
		},

		getDate : function(){
			const date = new Date();
			// 년.월.일 시:분:초
			const todayYear = date.getFullYear();
			const todayMonth = date.getMonth() + 1;
			const todayDate = date.getDate();
			const todayHour = date.getHours();
			const todayMinute = date.getMinutes();
			const todaySecond = date.getSeconds();
			const result = `${todayYear}.${todayMonth}.${todayDate} ${todayHour}:${todayMinute}:${todaySecond}`;
			return result;
		}
	}
}
</script>

<style scoped>
	input{
		width: 330px;
		height: 30px;
		font-size: 15pt;
	}
	textarea{
		width: 330px;
		height: 250px;
		border-radius:0.5rem;
		border: 3px solid #000;
		resize:none;
	}

	button{
    width: 100px;
    height: 40px;
    border-radius : 0.325rem;
    border: 1px solid #222222;
    background-color: #222222;
    color: #f6f6f6;
    font-size : 13pt;
  }

  button:active{
    background-color: #f6f6f6;
    color:#222222;
  }
</style>