<template>
	<div>
		<el-row class="tac">
		  <el-col :span="12">
		    <el-menu
		      default-active="2"
		      class="el-menu-vertical-demo"
		      @open="handleOpen"
		      @close="handleClose">
		      <el-submenu v-for="(item,index) in cnm" :key="item.id" :index="item.id.toString()">
		        <template slot="title">
		          <i class="el-icon-location"></i>
		          <span>{{item.name}}</span>
		        </template>
		        <el-menu-item-group v-if="item.children&&item.children.length>0">
		          
		          <el-menu-item v-for="val in item.children" :key="val.id" :index="val.id.toString()">
					  <router-link :to="`/category/${val.id}`">{{val.name}}</router-link>
				  </el-menu-item>
		        </el-menu-item-group>
		        
		      </el-submenu>
		      
		    </el-menu>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'HomeCategory',
		props:["cnm"],
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
