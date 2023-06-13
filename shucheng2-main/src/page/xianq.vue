<template>
	<div class="books">
		<Header></Header>
		<Loading v-if="loading"></Loading>
		<xianqWW :item="books"></xianqWW>
		
		<el-pagination small layout="prev,pager,next" :total="total" :page-size="pageNum"></el-pagination>
	</div>
</template>

<script>
	import Loading from '../components/Loading.vue';
		import BookList from '../page/BookListItem.vue';
		import Header from '../page/Header.vue';
		import xianqWW from './xianqWW.vue';
		export default{
			name:'xianq',
			components:{Loading,Header,BookList,xianqWW},
			data(){
				return {
					loading:false,
					books:[],
					message:'',
					total:0,
					pageSize:1,
					pageNum:2,
				}
			},
			beforeRouteEnter(to,from,next){
				// 1.当访问下一个路由之前，先处理执行操作
				// vm参数：代替this
				next((vm)=>{
					let url = vm.setUrls(to.fullPath)
					vm.getAxios(url)
				})
			},
			beforeRouteUpdate(to,from,next){
				let url = this.setUrls(to.fullPath);
				this.getAxios(url);
				next();
			},
			methods:{
				setUrls(path){
					let url;
					if(path.indexOf('/book') != -1){
						url='shu'+path;
						let l =path
						let ll = l.substring(l.lastIndexOf("/")+1)
						console.log(ll)
					}else{
						url=`${path}&pageSize=${this.pageSize}&pageNum=${this.pageNum}`
					}
					return url
				},
				// 2.请求函数      url此参数：获取设置好的请求地址结果
				getAxios(url){
					this.$axios.get(url).then((res)=>{
						if(res.status==200){
							this.loading=false
							if(this.$route.name=='BooksSearch'){
								this.total=res.data.data.length
								this.books=res.data.data
							}else if(this.$route.name=="xianq"){
								this.total=res.data.length
								this.books=res.data;
							}
							if(this.$route.name=='BooksSearch' && this.total==0){
								this.message='没有搜索到相关书籍'
							}else if(this.$route.name=='xianq' && this.total==0){
								this.message='当前分类下没有相关书籍信息'
							}
						}
					}).catch((error)=>{
						console.log(error)
						console.log(url)
					})
				}
			}
		}
	</script>
	
	<style scoped>
		.ww111{
			width: 100%;
		}
		.ww222{
			width: 100%;
			display: flex;
		}
		.img{
			width: 15%;
			border: 1px solid red;
		}
		.ww333{
			width: 85%;
			text-align: left;
			border: 1px solid red;
		}
		.p1{
			margin: 0;
		}
	</style>
	