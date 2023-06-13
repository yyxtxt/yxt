<template>
	<div>
		<el-menu  background-color="#545c64" text-color="#fff">
			<template v-for="item in pbac" >
		      <el-submenu  index="1">
		        <template slot="title">
		          <span>{{item.title}}</span>
		        </template>
				
		      </el-submenu>
			  </template>
		    </el-menu>
	</div>
</template>

<script>
	export default{
		props:['pbac']
	}
</script>

<style>
	
</style>
