<template>
	<div style="width: 100%;margin: auto;">
		
	
	<div class="ww111">
		<div class="ww222">
			<div class="ww333">
				<div class="w333">
					<div style="width: 100%;height: 70%;display: flex;">
						<div style="width: 30%;height: 100%;text-align: left;">
							<img style="width: 100%;height: 90%;" :src="'https://statics.zhuishushenqi.com'+item.cover" />
						</div>
						<div style="width: 70%;height: 100%;">
							<p class="p1">{{item.title}}</p>
							<p class="p2"><span v-for="item1 in item.tags">{{item1}}</span></p>
							<p class="p2">{{item.author}}|{{item.minorCate}}|{{item.wordCount}}字</p>
							<p class="p3">最后更新时间：{{item.updated}}</p>
							<br>
							<p class="p4"><a><button class="button">开始阅读</button></a><a><button class="button1" @click="AddCart(item)">加入书架</button></a></p>
						</div>
					</div>
					<div class="duz">
						<div class="duz1">
							<div class="duz3">追书人数</div>
							<div class="duz2">{{item.latelyFollower}}</div>
						</div>
						<div style="width: 33%;height: 100%;">
							<div class="duz3">读者留存率</div>
							<div class="duz2">{{item.retentionRatio}}%</div>
						</div>
						<div class="duz1">
							<div class="duz3">日更新字数</div>
							<div class="duz2">{{item.serializeWordCount}}</div>
						</div>
					</div>
				</div>
				<div>
					<p class="jjbt">《{{item.title}}》简介:</p>
					<p class="jjzw">{{item.shortIntro}}</p>
				</div>
			</div>
			
		</div>
		<div style="width: 100%;display: flex;flex-wrap: wrap;">
			<p style="width: 100%;">喜欢这本书的人也喜欢</p>
			<div style="width: 30%;" v-for="item2 in liu">
				<router-link :to="`/sjbook/${item2.book._id}`">
				<img style="width: 90%;" :src="'https://statics.zhuishushenqi.com'+item2.book.cover" />
				<div>
					<p>{{item2.book.title}}</p>
				</div>
				</router-link>
			</div>
		</div>
		<div style="width: 70%;" v-if="pagelist!=''">
			<p style="text-align: left;">《{{item.title}}》热门书评</p>
		</div>
		<div class="shup" v-for="item in pagelist">
			<div style="width: 100%;">
				<div style="height: 50px;">
					<div style="width: 100%;height: 100%;text-align: left;display: flex;">
						<img style="width: 10%;height: 100%;" :src="'https://statics.zhuishushenqi.com'+item.author.avatar" />
						<div style="width: 85%;margin-left: 5%;">
							<div style="height: 50%;width: 100%;">{{item.author.nickname}}&emsp;{{item.updated}}</div>
							<div style="height: 50%;width: 100%;">
								<span class="icon-xingxing iconfont" :class="item.rating>=1?'xnmx':'sss'"></span>
								<span class="icon-xingxing iconfont" :class="item.rating>=2?'xnmx':'sss'"></span>
								<span class="icon-xingxing iconfont" :class="item.rating>=3?'xnmx':'sss'"></span>
								<span class="icon-xingxing iconfont" :class="item.rating>=4?'xnmx':'sss'"></span>
								<span class="icon-xingxing iconfont" :class="item.rating>=5?'xnmx':'sss'"></span>
							</div>
						</div>
					</div>
				</div>
				<div style="width: 100%;">
					<p style="text-align: left;width: 92%;margin-left: 8%;">{{item.content}}</p>
				</div>
			</div>
		</div>
		
	</div>
	<el-pagination
		background
		@current-change="changePages"
		layout="prev, pager, next"
		:page-size="sbfy"
		:total="pl.length">
		
	    </el-pagination>
	</div>
</template>

<script>
	export default{
		name:'xianqWW',
		props:['item'],
		data(){
			return {
				list1:[],
				listz:this.$store.state.code,
				liu:[],
				ww:[],
				pl:[],
				sbfy:10,
				pagelist:[],
				wuyu:[]
			}
		},
		beforeRouteEnter(to,from,next){
			// 1.当访问下一个路由之前，先处理执行操作
			// vm参数：代替this
			next((vm)=>{
				let url = vm.setUrls(to.fullPath)
			})
		},
		beforeRouteUpdate(to,from,next){
			let url = this.setUrls(to.fullPath);
			next();
		},
		beforeUpdate(){
			this.ww=this.item
			if(this.pl==""){
				let url = 'https://www.zhuishushenqi.com/book/review/'+this.item._id
				this.$axios.get(url).then((res)=>{
					if(res.status==200){
						this.pl=res.data.reviews
					}
				}).catch((error)=>{
					console.log(error)
					console.log(url)
				})
			}
			this.http()
			this.wuyu=this.item
			
		},
		methods:{
			AddCart(){
				console.log(this.wuyu)
				this.$store.commit('cnmPnm',this.wuyu)
				console.log(this.$store.state.wuyu)
			},
			getcnm(arr,count){
				var shuffled= arr.slice(0),i=arr.length,min=i-count,temp,index;
				while(i-->min){
					index=Math.floor((i+1)*Math.random());
					temp = shuffled[index];
					shuffled[index] = shuffled[i];
					shuffled[i] = temp;
				}
				return shuffled.slice(min);
			},
			www(){
				console.log(1)
				this.liu=this.getcnm(this.list1,3)
				console.log(this.liu)
			},
			http(){
				console.log(this.ww)
					this.list1 = this.listz.filter((item)=>{
						if(item.book.majorCate.indexOf(this.ww.majorCate)!=-1){
							return item.book
						}
					})
					console.log(this.ww.majorCate)
					this.www()
					if(this.pagelist==''){
						this.changePages(1)
					}

			},
			changePages(p){
				let start = (p-1)*this.sbfy;
				this.pagelist=this.pl.slice(start,start+this.sbfy)
				console.log(this.pagelist)
				console.log(p)
			}
			
		}
	}
</script>

<style scoped>
	.ww111{
		width: 100%;
		border: 1px solid red;
	}
	.ww222{
		width: 100%;
		display: flex;
		margin: auto;
	}
	.ww333{
		width: 100%;
	}
	.p1{
		text-align: left;
		margin: 0;
		font-size: 1.5rem;
	}
	.p2{
		text-align: left;
		margin: 0;
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 0.8rem;
	}
	.p2 span{
		background-color: #86bfec;
		margin-left: 10px;
		color: white;
		padding: 5px;
	}
	.p3{
		text-align: left;
		margin: 0;
		font-size: 0.8rem;
	}
	.wuyong{
		width: 100%;
	}
	.p4{
		text-align: left;
	}
	.p4 .button{
		width: 45%;
		border: 0;
		color: white;
		background-color: red;
		height: 40px;
	}
	.p4 .button1{
		width: 45%;
		color: red;
		height: 40px;
		margin-left: 5%;
	}
	.duz{
		width: 100%;
		height: 30%;
		display: flex;
	}
	.duz1{
		 width: 33%;
		 height: 100%;
	}
	.duz2{
		margin: auto;
		margin-top: 10px;
		color: red;
	}
	.duz3{
		margin: auto;
		margin-top: 10px;
	}
	.w333{
		 width: 100%;
		 height: 300px;
		 border-bottom: 1px solid gray;
	}
	.jjbt{
		 border-left: 5px solid gold;
		 text-align: left;
		 font-size: 1.2rem;
		 font-weight: bold;
		 color: gray;
	}
	.jjzw{
		 text-align: left;
		 font-size: 0.8rem;
	}
	.shup{
		width: 70%;
		border: 1px solid red;
		display: flex;
	}
	.xnmx{
		background-color: gold;
	}
</style>
