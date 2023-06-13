<template>
	<div>
		
		<el-menu router :unique-opened="true" background-color="#545c64" text-color="#fff">
			<template v-for="item in prac" >
		      <el-submenu  :index="item.id.toString()">
		        <template slot="title">
		          <span>{{item.name}}</span>
		        </template>
				
				
				<template v-for= "(i,p) in item.children" >
		        <el-menu-item-group  >
					
				<router-link :to="`/category/${i.id}`">
		          <el-menu-item :index="i.id.toString()">
					{{i.name}}
				  </el-menu-item>
				  </router-link>
				  
		        </el-menu-item-group>
				</template>
				
				
		      </el-submenu>
			  </template>
		    </el-menu>
	</div>
</template>

<script>
	
	export default{
		props:['prac'],
		data(){
			return{
				
			}
		},
		mounted() {
			console.log(this.axiosCateList)
		}
		
	}
</script>

<style scoped="scoped">
	.el-menu{
		width: 100%;
		height: 0% !important;
		}
		
</style>
