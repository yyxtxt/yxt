<template>
	<div style="width: 100%;">
		<div style="width: 100%;display: flex;">
			<div style="width: 80%;border: 1px solid red;text-align: left;">
				<img style="width: 100px;" src="../assets/img/1.jpg" />
			</div>
			<div style="width: 80%;border: 1px solid red;text-align: left;">
				<input type="text" v-model="keywords"  />
				<button @click="search()"></button>
			</div>
			<div style="width: 20%;border: 1px solid red;display: flex;">
				<router-link to="">
					<div>登录</div>
				</router-link>
				<router-link to="">
					<div>注册</div>
				</router-link>
			</div>
		</div>
		<div style="width: 100%;">
			<el-menu background-color="#d9defe"  class="el-menu-demo" mode="horizontal">
				<el-menu-item index="1" style="width: 25%;"><router-link to="/BooksNew" style="font-size: 20px;">首页</router-link></el-menu-item>
				<el-menu-item index="2" style="width: 25%;"><router-link to="/catory" style="font-size: 20px;" >分类</router-link></el-menu-item>
				<el-menu-item index="3" style="width: 25%;"><router-link to="/书单" style="font-size: 20px;">书单</router-link></el-menu-item>
				<el-menu-item index="4" style="width: 25%;"><router-link to="/排行榜" style="font-size: 20px;">首页</router-link></el-menu-item>
			</el-menu>
		</div>
		<div style="width: 100%;">
			<el-carousel :interval="4000" height="200px">
			  <el-carousel-item v-for="item in img1">
			    <h3 class="medium"><img style="width: 100%;" :src="item.img"></h3>
			  </el-carousel-item>
			</el-carousel>
		</div>
		<div style="width: 100%;">
			<div style="width: 90%;border: 1px solid red;margin: auto;padding: 10px 0px 10px 0px;">
				<div style="width: 100%;display: flex;">
					<div style="width: 70%;display: flex;">
						<span>随机推荐</span>
						&emsp;<div style="background-color: gold;font-size: 10px;font-weight: bold;border-radius: 10px;padding: 2px 10px 2px 10px;">精挑+细选</div>
					</div>
					<div style="width: 30%;color: gold;font-weight: bold;" @click="www()">
						⭕换一换
					</div>
				</div>
			</div>
			<div style="width: 90%; display: flex;margin: auto;">
				<div style="width: 30%;margin-left: 3%;" v-for="item in liu">
					<router-link :to="`/sjbook/${item.book._id}`">
					<div>
						<img style="width: 100%;" :src="'https://statics.zhuishushenqi.com'+item.book.cover" />
					</div>
					<p style="text-align: left;">{{item.book.title}}</p>
					<p style="text-align: left;font-size: 10px;color: gray;">{{item.book.author}}</p>
					</router-link>
				</div>
			</div>
		</div>
		<div style="width: 100%;">
			<div style="width: 90%;border: 1px solid red;margin: auto;padding: 10px 0px 10px 0px;">
				<div style="width: 100%;display: flex;">
					<div style="width: 70%;display: flex;">
						<span>随机详情</span>
						&emsp;<div style="background-color: gold;font-size: 10px;font-weight: bold;border-radius: 10px;padding: 2px 10px 2px 10px;">new</div>
					</div>
					<div style="width: 30%;color: gold;font-weight: bold;" @click="ww()">
						⭕换一换
					</div>
				</div>
			</div>
			<div style="width: 90%; display: flex;margin: auto;">
				<div style="width: 30%;">
					<img style="width: 100%;" :src="'https://statics.zhuishushenqi.com'+l.cover" />
				</div>
				<div style="width: 70%;text-align: left;">
					<p>{{l.title}}</p>
					<p style="font-size: 10px;color: gray;">{{l.author}}</p>
					<p class="p1">{{l.longIntro}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				img1:[
					{img:require("../assets/img/1.jpg")},
					{img:require("../assets/img/2.jpg")},
					{img:require("../assets/img/3.jpg")},
					{img:require("../assets/img/4.jpg")},
					{img:require("../assets/img/5.jpg")},
					{img:require("../assets/img/6.jpg")},
					{img:require("../assets/img/7.jpg")},
					{img:require("../assets/img/8.jpg")},
					
				],
				listz:this.$store.state.code,
				liu:[],
				li:[],
				id:"",
				l:[]
			}
		},
		created(){
			this.liu=this.getcnm(this.listz,3)
			this.ww()
		},
		methods:{
		         search(){
				if(this.keywords!=''){
					this.$router.push({
						path:'/sjsearch',
						query:{
							wd:this.keywords
						}
					})
				}
			},
			getcnm(arr,count){
				var shuffled= arr.slice(0),i=arr.length,min=i-count,temp,index;
				while(i-->min){
					index=Math.floor((i+1)*Math.random());
					temp = shuffled[index];
					shuffled[index] = shuffled[i];
					shuffled[i] = temp;
				}
				return shuffled.slice(min);
			},
			www(){
				this.liu=this.getcnm(this.listz,3)
				console.log(this.liu)
			},
			ww(){
				this.li=this.getcnm(this.listz,1)
				console.log()
				this.$axios.all([
					this.$axios.get('/shu/book/'+this.li[0].book._id),
				]).then((res)=>{
					
					if(res[0].status==200){
						this.l=res[0].data;
						console.log(this.l)
					}
				}).catch((error)=>{
					console.log(error)
				})
						console.log(this.l)
				
			}
		}
	}
</script>

<style>
	a{
		text-decoration: none;
	}
	p{
		margin: 0;
	}
	.p1{
		 font-size: 10px;
		 color: gray;
		 white-space: normal;
		 text-overflow: ellipsis;
		 overflow: hidden;
		 display: -webkit-box;
		 -webkit-line-clamp: 6;
		 -webkit-box-orient: vertical;
	}
</style>
