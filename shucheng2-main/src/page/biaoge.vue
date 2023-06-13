<template>

	    <el-table
	      :data="cnmw"
	      style="width: 100%">
			  <el-table-column
			    prop="title"
			    label="热门推荐"
			    width="180">
			  </el-table-column>
	      
	    </el-table>
</template>

<script>
	export default {
		props:["cnmw"],
	    methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	  }
</script>

<style>
</style>
