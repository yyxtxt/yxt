<template>
	<div class="books">
		<!-- 判断需要调用Loading -->
		<Loading v-if="Loading"></Loading>
		<template v-else>
			<BookList :li="books"></BookList>
			<!-- 提示语 -->
			<h1>{{message}}</h1>
			<!-- 设置分页器 -->
			<el-pagination small layout="prev,pager,next"
			 :hide-on-single-page="true" :total="total"
			  :page-size="pageNum" ></el-pagination>
		</template>
	</div>
</template>

<script>
	import BookList from '../components/Books/BookList.vue'
	import Loading from '../components/Loading.vue'
	export default{
		name:'Books',
		components:{
			Loading,
			BookList,
			},
		data(){
			return{
				Loading:false,
				books:[],
				booklist:[],
				message:'',
				//分页数据
				total:0,
				pageSize:1,
				pageNum:2,
			}
		},
		beforeRouteEnter( to , from , next ) {
			console.log(to.fullPath)
			//1.当访问下一个路由之前，先处理执行操作
			//vm参数  代替
			next( (vm)=>{
				let url = vm.setUrls(to.fullPath)
				//1.3调用请求数据的函数
				vm.getAxios(url)
			})
		},
		//在当前组件下修改访问路径【重新刷新当前组件】
		beforeRouteUpdate( to , from , next){
			//向拼接函数传递目标地址路由
			let url = this.setUrls( to.fullPath)
			this.getAxios( url )
			//完成上述步骤后，继续进入目标路由完成挂载后的操作    setUrls
			next();
		},
		methods:{
			setUrls(path){
				let url;
				if(path.indexOf('/category') !=-1){
					url = '/book' + path
				}else{
					url = `${path}&pageSize=${this.pageSize}&pageNum=${this.pageNum}`
				}
				return url
			},
			getAxios(url){
				console.log(url)
				// 2.1发起请求
				this.$axios.get( url ).then( (res)=>{
					console.log(res)
					if(res.status==200){
						// 停止加载工具
						this.Loading=false;
						// 判断当前访问的路由类型，确定获取数据的方式
						if(this.$route.name == 'BooksSearch'){
							// 总数据长度
							this.total=res.data.data.length
							// 获取数据
							this.books=res.data.data
						}else if(this.$route.name == 'BookCategory'){
							// 总条数
							this.total=res.data.length;
							// 数据
							this.books=res.data;
							console.log(this.books)
						}
						// 判断当不同路由时，没有数据下的提示语
						if(this.$route.name =='BooksSearch' && this.total ==0){
							this.message='没有搜索到相关书籍！'
						}else if(this.$route.name == 'BookCategory' && this.total == 0){
							this.message='当前分类下没有相关书籍信息！'
						}
					}
				}).catch( (error)=>{
					console.log(error)
				})
			}
			}
	}
	
</script>

<style scoped="scoped">
	.books h1{
		text-align: center;
		font-size: 20px;
		color: #666;
	}
</style>
