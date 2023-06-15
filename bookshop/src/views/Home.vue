<template>
	<div>
	
	<div class="zj">
		
	<div class="a">
		<HomeCategory :prac="axiosCateList" ></HomeCategory>
	</div>
	
	<!-- 轮播图 -->
	<div class="swiper">
		<HomeSwiper></HomeSwiper>
	</div>
	
	<div class="b">
		<HomeHot :pbac="axiosHotList"></HomeHot>
	</div>
	  
	</div>
	 <div>
		   <Homebooks :pack="axiosNewBookList"></Homebooks>
	   </div>
	</div>
</template>
<script>
	import Homebooks from '../components/home/Homebooks.vue'
	import HomeCategory from '../components/home/HomeCategory.vue'
	import HomeSwiper from '../components/home/HomeSwiper.vue'
	import HomeHot from '../components/home/HomeHot.vue'
	export default{
		components:{
			HomeCategory,
			Homebooks,
			HomeSwiper,
			HomeHot,
		},
		data(){
			return{
				loading:true,
				axiosCateList:[],
				axiosHotList:[],
				axiosNewBookList:[],
			}
		},
		created() {
			this.httpAll();
		},
		methods:{
			httpAll(){
				this.$axios.all([
					this.$axios.get('/category'),
					this.$axios.get('/book/hot'),
					this.$axios.get('/book/new'),
				]).then( (res)=>{
					console.log(res)
					if( res[0].status==200&& res[0].status==200&&res[0].status==200){
						this.loading = false
						this.axiosCateList = res[0].data
						console.log(res[0].data)
						this.axiosHotList = res[1].data
						console.log(res[1].data)
						this.axiosNewBookList = res[2].data
						console.log(this.axiosNewBookList)
					}
				})
			}
		},
		
		
	}
</script>

<style scoped="scoped">
	
	.zj{
		display: flex;
		width: 100%;
		justify-content: space-around;
	}
	.swiper{
		width: 42%;
	}
	.a{
		width: 20%;
		height: auto;
		
	}
	.b{
		width: 20%;
	}
</style>
