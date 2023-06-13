<template>
	<div class="books">
		<div style="width:100%">搜索到{{list1.length}}条数据</div>
		<div style="width:100%;display:flex" v-for="(item,index) in list1">
			<div style="width:30%">
				<img style="width:100%" :src="'https://statics.zhuishushenqi.com'+item.book.cover" />
			</div>
			<div style="width:70%;text-align:left">
				<p>{{item.book.title}}</p>
				<p>{{item.book.author}}</p>
			</div>
		</div>
		
		<el-pagination small layout="prev,pager,next" :total="total" :page-size="pageNum"></el-pagination>
	</div>
</template>

<script>
	export default{
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

<style>
</style>