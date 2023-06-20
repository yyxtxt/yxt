<template>
	<div>
	<template v-for="item in po"> 	
	   <div class="fenlei">
			<div class="tu">
				<a :href="`/book/${item.id}`">
					<img :src="'/api'+item.imgUrl" />
				</a>
			</div>
			<div class="txt">
				<a :href="`/book/${item.id}`">
				   <h1>{{item.title}}</h1>
				</a>
				<div class="txt2">
				<b>折后价：</b><span>{{(item.price*item.discount).toFixed(2)}}</span>&emsp;&emsp;&emsp;
				原价：￥<h3>{{(item.price).toFixed(2)}}</h3>
				</div>
				<h2>{{item.author}}&emsp;/{{item.publishDate}}&emsp;/{{item.bookConcern}}</h2>
				<p>简介：{{item.brief}}</p>
				<!-- 传递当前被加入购物车的数据的id值传递到函数内 -->
				<button @click="Addcart(item)">加入购物车</button>
			</div>
	   </div>	
	</template>	
	</div>

</template>

<script>
	// 引入辅助函数
	import { mapActions } from 'vuex'
	export default{
		name:'BookListItem',
		props:['po'],
		methods:{
			fun(val){
				console.log(val)
			},
			// 1.引入store/cart/actions.addProducToCart()函数   
			// 格式:...mapActions( '模块名' , ['调用函数'] ) ==> 需要调用xx模块下的xxx函数
			// 如果是不用辅助函数的写法:this.$store.commit('cart/addProducToCart');
			// 用辅助函数的话:...mapActions('cart' , ['addProducToCart']),
			// cart是store目录下modules下的js文件
			...mapActions('cart' , ['addProducToCart']),
			// 2.加入购物车
			Addcart(val){
				// console.log(item)
				// 2.1默认购买数量为1
				let quantity = 1;
				// 2.2将需要添加到购物车的数据进行扩展处理,打包操作
				let newItem = {
					// es6语法,将该对象中的所有数据进行扩展,分割然后分批赋值给newItem变量
					...val,
					// 计算折后价
					price : (val.price * val.discount).toFixed(2),
					quantity,
				}
				console.log(newItem)
				if( this.$store.state.user.user){
					//如果用户已登录，才执行添加操作
					// 3.3调用vuex的函数,将整理打包好的购物数据传递过去
				    this.addProducToCart(newItem),
					this.$router.push('/shopcart')
				    
				}else{
					this.$router.push('/login')
				}
			}
		}
	}
</script>

<style scoped>
	.fenlei{
		margin-top: 20px;
		width: 100%;
		display: flex;
		border-bottom: 1px dashed gray;
		text-align: left;
	}
	.tu{
		width: 20%;
	}
	.tu img{
		width: 100%;
	}
	.txt{
		width: 80%;
	}
	.txt h1{
		font-size: 1.3em;
	}
	.txt2{
		display: flex;
		height: 30px;
		/* background-color: red; */
		align-items: center;
	}
	.txt2 h3{
		font-weight: 100;
		font-size: 1em;
		color: gray;
		text-decoration: line-through;
	}
	.txt h2{
		font-size: 1em;
		font-weight: 100;
		line-height: 10px;
		text-align: left;
	}
	.txt p{
		font-size: 1em;
		font-weight: 100;
		line-height: 25px;
	}
	.txt button{
		margin-top: -20px;
		width: 120px;
		border-radius: 10px;
		background-color: #1E90FF;
		color: white;
		border: 0;
		height: 40px;
		float: left;
	}
	a{
		text-decoration: none;
		color: black;
	}
</style>
