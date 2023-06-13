<template>
	<div class="booksnew">
		
			<div class="w">
				<Header></Header>
				<div class="zhongbu">
					
					 <el-col class="wda" :span="12">
					    <el-menu
					      class="el-menu-vertical-demo"
					      background-color="#545c64"
					      text-color="#fff"
					      active-text-color="#ffd04b">
					      <el-submenu :index="index"  v-for="(item,index) in list">
					        <template slot="title">
					          <i class="el-icon-location"></i>
					          <span>{{index=='female' ? '女生' : index=='male' ? '男生' : index=='ok' ? '未知' : index=='prcture' ? '图片' : index=='press' ? '未知' :'推荐'}}</span>
					        </template>
					        
					      </el-submenu>
					    </el-menu>
					  </el-col>
					  <div style="width: 30%;height: 100%;">
						<div class="block">
						    <el-carousel height="200px">
						      <el-carousel-item v-for="item in imgarr">
						        <img class="img" :src="item.img" />
						      </el-carousel-item>
						    </el-carousel>
						  </div>  
					  </div>
					  
						<div class="homeright">
						<router-link to="/catory">啊</router-link>	
						</div>
				</div>
				<div style="width: 100%;display: flex;flex-wrap: wrap;">
					<div style="width: 8%;margin-left: 2%;margin-top: 2%;" v-for="item in pagelist">
						<div>
							<img style="width: 100%;" :src="'https://statics.zhuishushenqi.com'+item.book.cover" />
							<router-link :to="`/book/${item.book._id}`"><p>{{item.book.title}}</p></router-link>
						</div>
					</div>
					
				</div>
				<el-pagination
					background
					@current-change="changePages"
					layout="prev, pager, next"
					:page-size="sbfy"
					:total="list1.length">
					
				    </el-pagination>
				
				 
				  
			</div>
	</div>
</template>

<script>
	import Loading from './Loading.vue';
	import Header from '../page/Header.vue'
	import HomeCategory from '../page/HomeCategory.vue'
	import HomeSwiper from '../page/HomeSwiper.vue'
	import Biaoge from '../page/biaoge.vue'
	export default{
		components:{Loading,Header,HomeCategory,HomeSwiper,Biaoge},
		data(){
			return {
				loadbool:true,
				list:[],
				sbfy:20,
				list1:[],
				listz:this.$store.state.code,
				pagelist:[],
				imgarr:[
					{img:require("../assets/img/1.jpg")},
					{img:require("../assets/img/2.jpg")},
					{img:require("../assets/img/3.jpg")},
					{img:require("../assets/img/4.jpg")},
				]
			}
		},
		created(){
			setTimeout(()=>{
				this.http();
				this.changePages(1)
			},500)
		},
		methods:{
			http(){
			console.log(1)
				this.$axios.get('/shu/cats/lv2/statistics').then((res)=>{
					if(res.status==200){
						this.loadbool=false
						this.list=res.data;
					}
				}).catch((error)=>{
					console.log(error);
				})
				
						
						this.list1 = this.listz.filter((item)=>{
							if(item.book.title[0].indexOf(item.book.title[0])<=1){
								return item.book;
							}
						})
						console.log(this.list1)
						this.changePages(1)
			},
			changePages(p){
				let start = (p-1)*this.sbfy;
				this.pagelist=this.list1.slice(start,start+this.sbfy)
			}
		}
	}
</script>

<style scoped>
	.w{
		width: 100%;
		background-color: #008B8B;
		margin: auto;
		text-align: left;
	}
	.ww{
		width: 80%;
		
	}
	.serach{
		width: 100%;
		height: 100px;
		display: flex;
	}
	.serach1{
		width: 20%;
		text-align: right;
		margin: auto;
	}
	.serach input{
		width: 50%;
		height: 50px;
		margin: auto;
	}
	.el-menu-vertical-demo{
		width: 40%;
	}
	.zhongbu{
		display: flex;
	}
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 150px;
	    margin: 0;
	  }
	
	  .el-carousel__item:nth-child(2n) {
	     background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	     background-color: #d3dce6;
	  }
	  .block{
		  width: 100%;
		  margin: auto;
		  position: relative;
		  left: -250px;
	  }
	  .img{
		  width: 100%;
	  }
	  .homeright{
		  width: 30%;
		  border: 1px solid red;
	  }
</style>
