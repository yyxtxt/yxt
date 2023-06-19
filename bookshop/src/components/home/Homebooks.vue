<template>
	<div class="homebooks">
		<p class="xs">新书上市</p>
		<div class="xsss">
			<div v-for=" item in pack" class="c">
				
			<a :href="`/book/${item.id}`" class="cc">
			<img :src="'/api/'+item.imgUrl" />
			<p>{{item.title}}</p>
			<span style="font-weight: bold;">
			￥{{(item.price*item.discount).toFixed(2)}} </span><span>￥{{item.price.toFixed(2)}}</span>
			
			</a>
		</div>
		</div>
		
		
	</div>
</template>

<script>
	export default{
		props:['pack'],
		mounted() {
			console.log(this.pack)
		}
	}
</script>

<style scoped="scoped">
	.homebooks{
		width: 100%;
		height: 440px;
		background-color: #d9defe;
	}
	.xsss{
		width: 80%;
		margin: auto;
		display: flex;
		justify-content: space-around;
	}
	.c{
		background-color: white;
		border-radius: 10px;
		width: 230px;
		height: 300px;
		padding-top: 20px;
	}
	.cc{
		text-decoration: none;
	}
	.xs{
		color: white;
		font-size: 20px;
		font-weight: bold;
		line-height: 60px;
	}
</style>
