<template>
	<el-main>
		<el-button type="primary" @click='gwc'>购物车</el-button>
	</el-main>
</template>

<script>
	export default{
		methods:{
			gwc(){
				this.$router.push({path:'/shopcart'})
				this.$router.go(0)
			}
			
		}
	}
</script>

<style scoped="scoped">
	.el-button{
		width: 200px;
	}
</style>
