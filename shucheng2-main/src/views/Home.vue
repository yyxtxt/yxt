<template>
	<div>
		
		<Header></Header>
		<div class="wui">
			<HomeCategory :cnm="axiosCateList" style="width: 30%;"></HomeCategory>
			<HomeSwiper style="width: 40%;"></HomeSwiper>
			<Biaoge :cnmw="axiosHotList" style="width: 30%;"></Biaoge>
		</div>
		<div style="width: 100%;background-color: #008B8B;">
			<p style="text-align: center;">热门推荐</p>
			<div style="width: 100%;background-color: #008B8B;display: flex;flex-wrap: wrap;">
				<div style="width: 15%;margin-left: 5%;background-color: #008B8B;" v-for="item in axiosHotList">
					<router-link :to="`/book/${item.id}`">
						<img class="img" :src="item.bigImgUrl" />
						
						<p>{{item.title}}</p>
					</router-link>
					
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import Header from '../page/Header.vue'
	import HomeCategory from '../page/HomeCategory.vue'
	import HomeSwiper from '../page/HomeSwiper.vue'
	import Biaoge from '../page/biaoge.vue'
	export default {
		components:{
			Header,HomeCategory,HomeSwiper,Biaoge
		},
		data(){
			return{
				axiosCateList:[],
				axiosHotList:[],
				axiosNewBookList:[],
				loading:true
				
			}
		},
		created() {
			this.http()
		},
		methods:{
			http(){
				this.$axios.all([
					this.$axios.get('https://api.zhuishushenqi.com/category'),
					this.$axios.get('/book/hot'),
					this.$axios.get('/book/new')
				]).then((res)=>{
					console.log(res);
					if(res[0].status==200&&res[1].status==200&&res[2].status==200){
						this.loading=false
						this.axiosCateList=res[0].data;
						console.log(res[0].data);
						this.axiosHotList=res[1].data;
						this.axiosNewBookList=res[2].data;
					}
				}).catch((error)=>{
					console.log(error)
				})
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	.wui{
		width: 100%;
		display: flex;
		border: 1px solid red;
	}
	.img{
		width: 100%;
		background-color: #008B8B;
	}
	
</style>
