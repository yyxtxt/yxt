<template>
	<el-main>
		<el-row>
		  <el-col :span="24">
			  <div class="grid-content bg-purple-dark">
		 <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal" >
		   <el-menu-item index="/header/home">首页</el-menu-item>
		   <el-menu-item index="/header/headerxs">新书展示</el-menu-item>
		   <el-menu-item index="/header/3">特价书</el-menu-item>
		   <el-menu-item index="/header/4">教材</el-menu-item>
		   <el-menu-item index="/header/5">视听教程</el-menu-item>
		  </el-menu>
		  </div></el-col>
		</el-row>
		<div>
			<router-view></router-view>
			<!-- <Home></Home> -->
		</div>
	</el-main>
</template>

<script>
	export default{
		beforeMount() {
			this.pathIndex = this.$route.path
		}
	}
</script>

<style scoped="scoped">
	.el-row {
		width: 100%;
		margin: 0 !important;
		padding: 0 !important;
	    margin-bottom: 20px;
	    
	  }
	   .el-col {
	      border-radius: 4px;
	    }
	    .bg-purple-dark {
	      background: #99a9bf;
	    }
		.bg-purple-dark{
			display: flex;
		}
	    ul{
			display: flex;
			list-style: none;
			margin: 0 auto;
		}
		li{
			line-height: 60px;
			width: 150px;
		}
	    
	   
</style>
