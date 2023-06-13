<template>
	<el-main>
		<template>
		  <el-carousel :interval="5000" arrow="always">
		    <el-carousel-item v-for="(item ,index) in list" :key="index">
		      <img :src="item.imgURL" width="100%" />
		    </el-carousel-item>
		  </el-carousel>
		</template>
	</el-main>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{ id : 1 , imgURL:require("../../assets/banner/1.jpg")},
					{ id : 2 , imgURL:require("../../assets/banner/2.jpg")},
					{ id : 3 , imgURL:require("../../assets/banner/3.jpg")},
					{ id : 4 , imgURL:require("../../assets/banner/4.jpg")},
					{ id : 5 , imgURL:require("../../assets/banner/5.jpg")},
					{ id : 6 , imgURL:require("../../assets/banner/6.jpg")},
					{ id : 7 , imgURL:require("../../assets/banner/7.jpg")},
					{ id : 8 , imgURL:require("../../assets/banner/8.jpg")},
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.el-carousel{
		width: 100%;
		height: auto;
	}
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 18px;
	    opacity: 0.75;
	    line-height: 300px;
	    margin: 0;
	  }
	  
	  .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }
</style>
