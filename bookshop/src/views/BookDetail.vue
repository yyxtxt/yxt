<template>
	<div class="da">
		<Loading v-if="Loading"></Loading>
		<template v-else>
			<!-- {{xianqing}} -->
			<div class="xiangqing">
				<template v-for="item in xianqing">
				<div class="piang">
					<img :src="item.imgUrl" />
				</div>
				<div class="txt">
					<h1>{{item.title}}</h1>
					<p>{{item.slogan}}</p>
					<div class="txt1">
						作者：<span>{{item.author}}</span>&emsp;
						出版社：<span>{{item.bookConcern}}</span>&emsp;
						日期：<span>{{item.publishDate}}</span>
					</div>
					<div class="txt2">
					<b>￥{{(item.price*item.discount).toFixed(2)}}</b>&emsp;
					<span>[{{item.discount*100}}折]</span>&emsp;
					[定价￥<h2>{{(item.price).toFixed(2)}}</h2>]	
					</div>
				</div>
				</template>	
			</div>
			<BookDetailAddReduce :ta="xianqing"></BookDetailAddReduce>
			<BookDetailTab :li="xianqing" :on="pingjia"></BookDetailTab>
		</template>
	</div>
</template>

<script>
	import Loading from '../components/Loading.vue'
	import BookDetailAddReduce from '../components/BookDetail/BookDetailAddReduce.vue'
	import BookDetailTab from '../components/BookDetail/BookDetailTab.vue'
	export default{
		name:'BookDetail',
		components:{
			Loading,
			BookDetailAddReduce,
			BookDetailTab,
		},
		data(){
			return{
				Loading:true,
				xianqing:[],
				pingjia:[],
			}
		},
		beforeRouteEnter( to , from ,next){
			console.log(to.fullPath)
			next( (vm)=>{
				vm.dan(to.fullPath)
				vm.ran(to.fullPath+'/comment')
			})
		},
		methods:{
			dan(url){
				console.log(url)
				this.$axios.get( url ).then( (res)=>{
					console.log(res.data)
					if(res.status==200){
						this.Loading=false;
						this.xianqing.push(res.data)
						console.log(this.xianqing)
					}
				}).catch( (error)=>{
					console.log(error)
				})
			},
			ran(url){
				console.log(url)
				this.$axios.get( url ).then( (res)=>{
					console.log(res.data)
					if(res.status==200){
						this.Loading=false;
						this.pingjia=res.data
						console.log(this.pingjia)
					}
				}).catch( (error)=>{
					console.log(error)
				})
			}
		}
	}
	// meta
</script>

<style scoped>
	.da{
		width: 65%;
		margin: 0 auto;
	}
	.xiangqing{
		width: 100%;
		display: flex;
		/* flex-wrap: wrap; */
		margin-top: 20px;
	}
	.xiangqing .piang{
		width: 20%;
	}
	.xiangqing .piang img{
		width: 100%;
	}
	.xiangqing .txt{
		width: 80%;
		background-color: #D9DEFE;
		border-radius: 10px;
		padding: 0px 10px 10px 30px;
	}
	.xiangqing .txt2{
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.xiangqing h1{
		font-size: 1.5em;
		color: white;
	}
	.xiangqing p{
		font-size: 1em;
		font-weight: bold;
		line-height: 50px;
		color: white;
	}
	.xiangqing span{
		color: orange;
	}
	.xiangqing b{
		color: orange;
	}
	.xiangqing h2{
		font-size: 1em;
		text-decoration: line-through;
		font-weight: 100;
	}
</style>

