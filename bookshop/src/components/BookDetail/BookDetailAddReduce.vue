<template>
	<div class="anniu">
		<template v-for="item in ta">
		<div class="jiajian">
		<input type="number" v-model="num" />
		   <div class="ooo">
		      <a @click="num++">+</a>
		      <a @click="num==1 ? num=1 : num--">-</a>	
		   </div>
		</div>
		<el-button @click="add(item)">加入购物车</el-button>	
		</template>
	</div>
</template>

<script>
	// 引入辅助函数
	import { mapActions } from 'vuex'
	export default{
		name:'BookDetailAddReduce',
		props:['ta'],
		data(){
			return{
				num:1
			}
		},
		methods:{
			...mapActions('cart' , ['addProducToCart']),
			add(val){
				console.log(val)
				let quantity = this.num;
				let newItem = {
					...val,
					quantity,
				}
				console.log(newItem)
				this.addProducToCart(newItem),
				this.$router.push('/shopcart')
			}
		}
	}
</script>

<style scoped>
	.anniu{
		width: 20%;
		display: flex;
		/* background-color: red; */
		margin: 25px auto;
		text-align: center;
	}
	.jiajian{
		width: 50%;
		margin: 0 auto;
		display: flex;
	}
	.jiajian input{
		width: 60%;
	}
	.jiajian .ooo{
		width: 40%;
	}
	.jiajian .ooo a{
		display:block;
		background-color: #1E90FF;
		color: white;
		border: 1px solid black;
		width: 100%;
	}
	.el-button{
		width: 50%;
		margin-left: 30px;
		background-color: #1E90FF;
		border: 0;
		border-radius: 5px;
		color: white;
		font-weight: bold;
	}
	a{
		display: block;
		width: 100%;
		text-decoration: none;
	}
</style>
