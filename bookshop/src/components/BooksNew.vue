<template>
	<div class="booksnew">
		
		<loading v-if="loadBool"></loading>
		
		<template v-else>
			<h3>欢迎进入新书展示页面：{{list}}</h3>
		</template>
	</div>
</template>

<script>
	import Loading from './Loading.vue'
	export default{
		components:{ Loading },
		data(){
			return{
				loadBool:true,
				list :[],
			}
		},
		created() {
			setTimeout( ()=>{
				this.http();
			},1000)
			
		},
		methods:{
			http(){
				this.$axios.get('/category').then( (res)=>{
					if( res.status === 200){
						this.loadBool = false;
						this.list = res.data;
					}
				}).catch( (error)=>{
					console.log(error)
				})
			}
		}
	}
</script>

<style>
</style>
