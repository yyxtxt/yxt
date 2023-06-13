<template>
	<div style="width: 100%;">
		<Header></Header>
		<div style="width: 60%;margin: auto;">
			<el-menu
			  default-active="2"
			  class="el-menu-vertical-demo"
			  background-color="#545c64"
			  text-color="#fff"
			  active-text-color="#ffd04b">
			  <el-menu-item index="2" @click="fui(1)">
			    <i></i>
			    <span slot="title">男生</span>
			  </el-menu-item>
			  <el-menu-item index="3" @click="fui(2)">
			    <i></i>
			    <span slot="title">女生</span>
			  </el-menu-item>
			 
			</el-menu>
			<div style="width: 100%;display: flex;" v-for="item in listz.bookLists">
				<router-link :to="`/book-list/${item._id}`" style="display: flex;width: 100%;margin: 10px;">
					<div style="width: 10%;">
						<img style="width: 100%;" :src="'https://statics.zhuishushenqi.com'+item.cover"/>
					</div>
					<div style="width: 70%;text-align: left;">
						<p>{{item.title}}</p>
						<p>{{item.author}}</p>
						<p>{{item.desc}}</p>
					</div>
				</router-link>
				
			</div>
			<el-pagination
				background
				@current-change="changePages"
				layout="prev, pager, next"
				:page-size="sbfy"
				:total="listz.total">
				
			    </el-pagination>
				{{listz.total}}
			
		</div>
	</div>
	
</template>

<script>
	import Header from '../page/Header.vue'
	import Loading from '../components/Loading.vue';
	export default{
		components:{Header,Loading},
		data(){
			return {
				listz:[],
				la_id: "",
				nowurl: "",
				sbfy:20,
				gender:"female",
				p:1
			}
		},
		created() {
			// this.linktab();
			this.$axios.all([
				this.$axios.get('/shu/book-list'),
			]).then((res)=>{
				
					this.listz=res[0].data
					this.changePages(1)
			}).catch((error)=>{
				console.log(error)
			})
		},
		methods:{
			changePages(p){
				this.p=p
				if(p!=1){
					this.$axios.all([
						this.$axios.get(`/shu/book-list?start=${this.p*20+1}&gender=${this.gender}`),
					]).then((res)=>{
						
							this.listz=res[0].data
							
					}).catch((error)=>{
						console.log(error)
					})
				}else if(p==1){
					this.$axios.all([
						this.$axios.get(`/shu/book-list?start=${this.p}&gender=${this.gender}`),
					]).then((res)=>{
						
							this.listz=res[0].data
							console.log(this.listz)
					}).catch((error)=>{
						console.log(error)
					})
				}
				
			},
			fui(w){
				if(w==1){
					this.gender="male"
					this.changePages(1)
				}else if(w==2){
					this.gender="female"
					this.changePages(1)
				}
			}
		}
	}
</script>

<style>
</style>