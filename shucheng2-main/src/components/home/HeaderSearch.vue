<template>
	<div class="zj">
		<el-input v-model="keywords" placeholder="请输入内容"></el-input><el-button type="primary" @click="search()">主要按钮</el-button>
	</div>
</template>

<script>
	export default{
		name:'HeaderSearch',
		data(){
			return {
				keywords:'',
				input:''
			}
		},
		methods:{
			search(){
				if(this.keywords!=''){
					this.$router.push({
						path:'/search',
						query:{
							wd:this.keywords
						}
					})
				}
			}
		}
	}
</script>

<style>
</style>
