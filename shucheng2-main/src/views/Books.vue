<template>
	<div class="books">
		<Header></Header>
		<Loading v-if="loading"></Loading>
		<BookList :item="list1"></BookList>
		
		<el-pagination small layout="prev,pager,next" :total="total" :page-size="pageNum"></el-pagination>
	</div>
</template>

<script>
	import Loading from '../components/Loading.vue';
	import BookList from '../page/BookListItem.vue';
	import Header from '../page/Header.vue';
	import {mapState,mapActions} from "vuex";
	
	export default{
		name:'Books',
		components:{Loading,Header,BookList},
		data(){
			return {
				loading:false,
				books:[],
				list:[],
				list1:[],
				listz:this.$store.state.code,
				message:'',
				total:0,
				wd:this.$route.query.wd,
				pageSize:1,
				pageNum:2,
			}
		},
		computed:{
			...mapState({
				print:state=>state.print.all
			})
		},
		watch:{
			
		},
		created(){
			this.http()
		},
		methods:{
			http(){
				console.log(this.listz)
				this.list1 = this.listz.filter((item)=>{
					if(item.book.title.indexOf(this.wd)!=-1||item.book.author.indexOf(this.wd)!=-1||item.book.majorCate.indexOf(this.wd)!=-1||item.book.minorCate.indexOf(this.wd)!=-1){
						return item.book
					}
				})
				this.changePages(1)
			},
			changePages(p){
				let start = (p-1)*this.sbfy;
				this.pagelist=this.list1.slice(start,start+this.sbfy)
			}
			// 2.请求函数      url此参数：获取设置好的请求地址结果
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
