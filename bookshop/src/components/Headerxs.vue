<template>
	<div class="headerxs">
		<div v-for="item in axiosNewBookList">
			<a :href="`/book/${item.id}`" class="headerxs-nr">
			<div>
				<img :src="'/api/'+item.imgUrl" >
			</div>
			<div>
				<p>《{{item.title}}》</p>
				<p>作者:{{item.author}}</p>
				<p>原价:￥{{item.price.toFixed(2)}}</p>
				<h3>折后价:￥{{(item.price*item.discount).toFixed(2)}}</h3>
			</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				axiosNewBookList:[],
			}
		},
		created() {
			this.httpAll()
		},
		methods:{
			httpAll(){
				this.$axios.all([
					this.$axios.get('/api/api/book/new')
				]).then( (res)=>{
					if(res[0].status==200){
						this.axiosNewBookList = res[0].data
						console.log(this.axiosNewBookList)
					}
				})
			}
		},
		
		
	}
</script>

<style scoped="scoped">
	.headerxs{
		width: 70%;
		margin: auto;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		
	}
	.headerxs-nr{
		display: flex;
		width: 500px;
		text-decoration: none;
	}
	
</style>
