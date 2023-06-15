<template>
	<el-main>
		<el-input v-model="keywords" placeholder="请输入内容"></el-input><el-button type="primary" @click="search">搜索书籍</el-button>
	</el-main>
</template>

<script>
	export default{
		data(){
			return{
				keywords:'',
			}
		},
		methods:{
			search(){
				if(this.keywords !=''){
					this.$router.push({
						path:'/search',
						query:{
							wd:this.keywords,
						}
					}, ()=>{} , ()=>{})
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.el-main{
		width: 500px;
		height: auto;
		display: flex;
	}
</style>
