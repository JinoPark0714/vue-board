<template>
	<div>
		<h2>Post</h2>
		<header>
			<div>제목</div>
			<input type="text">
		</header>
		<article>
			<div>내용</div>
			<textarea></textarea>
		</article>
		<footer>
			<button>취소</button>
			<button v-on:click="test">완료</button>
		</footer>
		
	</div>
</template>

<script>


function test(){
	alert("Hello world");
}
export default {
	methods : {
		test : test
	}
}
</script>

<style scoped>
	input{
		width: 500px;
		height: 30px;
		font-size: 15pt;
	}
	textarea{
		width: 500px;
		height: 250px;
		border-radius:0.5rem;
		border: 3px solid #000;
		resize:none;
	}
</style>