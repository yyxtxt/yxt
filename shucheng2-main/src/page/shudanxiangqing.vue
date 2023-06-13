<template>
	<div style="width: 100%;">
		<Header></Header>
		<div style="width: 80%;margin: auto;">
			<div style="width: 100%;display: flex;" v-for="item in books">
				<router-link style="width: 100%;display: flex;" :to="`/book/${item.book._id}`">
				<div style="width: 10%;">
					<img style="width: 100%;" :src="'https://statics.zhuishushenqi.com'+item.book.cover" />
				</div>
				<div style="width: 90%;text-align: left;">
					<p style="padding: 10px;">{{item.book.title}}</p>
					<p style="padding: 10px;">{{item.book.majorCate}}|{{item.book.minorCate}}</p>
					<p style="padding: 10px;">简介：{{item.comment}}</p>
					<p style="padding: 10px;">人气：{{item.book.wordCount}}&emsp;|&emsp;读者留存率：{{item.book.retentionRatio.toFixed(2)}}</p>
				</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '../page/Header.vue'
	export default{
		components:{Header,},
		data(){
			return {
				listz:[],
				la_id: "",
				nowurl: "",
				books:[],
				loading:false
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
		created() {
			this.getAxios()
		},
		methods:{
			setUrls(path){
				let url;
				if(path.indexOf('/book-list') != -1){
					url='shu'+path;
				}else{
					url=`${path}&pageSize=${this.pageSize}&pageNum=${this.pageNum}`
				}
				return url
			},
			getAxios(url){
				this.$axios.get(url).then((res)=>{
					if(res.status==200){
						if(this.$route.name=='BooksSearch'){
							this.total=res.data.data.length
							this.books=res.data.data
						}else if(this.$route.name=="sudanxiangqing"){
							this.books=res.data.bookList.books;
							console.log(this.books)
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

<style>
</style>
