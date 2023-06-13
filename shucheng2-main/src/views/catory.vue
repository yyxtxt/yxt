<template>
	<div>
		<Header></Header>
		<div class="waic">
			<div class="waicleft">
				    <el-menu
				      default-active="2"
				      class="el-menu-vertical-demo"
				      background-color="#545c64"
				      text-color="#fff"
				      active-text-color="#ffd04b">
				      <el-menu-item index="2" @click="fui(1)">
				        <i></i>
				        <span slot="title">男生</span>
				      </el-menu-item>
					  <el-menu-item index="3" @click="fui(2)">
					    <i></i>
					    <span slot="title">女生</span>
					  </el-menu-item>
					  <el-menu-item index="4" @click="fui(3)">
					    <i></i>
					    <span slot="title">排行</span>
					  </el-menu-item>
				    </el-menu>
			</div>
			<div class="waicright">
				<p class="p1">{{jj}}</p>
				
				<div>
					<p style="text-align: left;font-size: 10px;font-weight: bold;border-left: 5px solid gold;">&emsp;作品类型</p>
					<div class="diyiji">
						<div class="put" v-if="dnmd=='female'">
							<p>
								<div :class="[{'zwy':index==wdnmd}]" style="width: 8%;" v-for="(item,index) in list.female" @click="fun(index,item.major)">
								{{item.major}}
								</div>
							</p>
							<div v-show="index==wdnmd" style="width: 100%;border: 1px solid red;display: flex;" v-for="(item,index) in list.female">
								<p style="text-align: left;font-size: 10px;font-weight: bold;border-left: 5px solid gold;">&emsp;具体类型：</p>
								<div :class="[{'zwy':index1==wdnmd1}]" style="width: 10%;border: 1px solid red;" v-for="(item1,index1) in item.mins" @click="fuiw(index1,item1)">
									{{item1}}
								</div>
							</div>
						</div>
						<div class="put" v-else-if="dnmd='male'">
							<p>
								<div :class="[{'zwy':index==wdnmd}]" style="width: 7%;" v-for="(item,index) in list.male" @click="fun(index,item.major)">
								{{item.major}}
								</div>
							</p>
							
							<div v-show="index==wdnmd" style="width: 100%;border: 1px solid red;display: flex;" v-for="(item,index) in list.male">
								<p style="text-align: left;font-size: 10px;font-weight: bold;border-left: 5px solid gold;">&emsp;具体类型：</p>
								<div :class="[{'zwy':index1==wdnmd1}]" style="width: 10%;border: 1px solid red;" v-for="(item1,index1) in item.mins" @click="fuiw(index1,item1)">
									{{item1}}
								</div>
							</div>
						</div>
						<div class="put" v-else>
							<p>
								<div :class="[{'zwy':index==wdnmd}]" style="width: 7%;" v-for="(item,index) in list.press" @click="fun(index,item.major)">
								{{item.major}}
								</div>
							</p>
							
							<div v-show="index==wdnmd" style="width: 100%;border: 1px solid red;display: flex;" v-for="(item,index) in list.press">
								<p style="text-align: left;font-size: 10px;font-weight: bold;border-left: 5px solid gold;">&emsp;具体类型：</p>
								<div :class="[{'zwy':index1==wdnmd1}]" style="width: 10%;border: 1px solid red;" v-for="(item1,index1) in item.mins" @click="fuiw(index1,item1)">
									{{item1}}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="shu">
					<div class="shu1" v-for="item in pagelist">
						<div style="width: 30%;">
							<img style="width: 100%;" :src="'https://statics.zhuishushenqi.com'+item.book.cover" />
						</div>
						<div class="biat">
							<router-link :to="`/book/${item.book._id}`"><p class="p2">{{item.book.title}}</p></router-link>
							<p class="p3"><span>{{item.book.author}}|{{item.book.majorCate}}</span></p>
							<div style="height: 30%;">
								
							</div>
							<p></p>
						</div>
					</div>
				</div>
				<el-pagination
					background
					@current-change="changePages"
					layout="prev, pager, next"
					:page-size="sbfy"
					:total="list1.length">
					
				    </el-pagination>
			</div>
		</div>

	</div>
	
</template>

<script>
	import Header from '../page/Header.vue'
	export default{
		components:{Header},
		data(){
			return {
				list:[],
				list1:[],
				sbfy:20,
				listz:this.$store.state.code,
				jj:'男生',
				daf:'玄幻',
				xiaof:'东方玄幻',
				dnmd:'male',
				wdnmd:0,
				wdnmd1:0,
				selectCategory: [],
				wi:'',
				pagelist:[],
			}
		},
		created(){
			this.http()
		},
		methods:{
			http(){
				
						this.list1 = this.listz.filter((item)=>{
							if(item.book.majorCate.indexOf(this.daf)!=-1&&item.book.minorCate.indexOf(this.xiaof)!=-1){
								return item.book
							}
						})
						this.changePages(1)
			},
			fun(i,w){
				this.wdnmd=i
				this.wdnmd1=0
				this.daf=w
				console.log(w)
				this.list1 = this.listz.filter((item)=>{
					if(item.book.majorCate.indexOf(this.daf)!=-1){
						return item.book
					}
				})
				console.log(this.list1)
				this.changePages(1)
			},
			fui(i){
				if(i==1){
					this.dnmd='male'
					this.jj='男生'
					this.daf='玄幻'
					this.xiaof='东方玄幻'
					
				}else if(i==2){
					this.dnmd='female'
					this.jj='女生'
					this.daf='古代言情'
					this.xiaof='穿越时空'
					
				}else if(i==3){
					this.dnmd='press'
					this.jj='排行'
					
				}
				this.list1 = this.listz.filter((item)=>{
					if(item.book.majorCate.indexOf(this.daf)!=-1&&item.book.minorCate.indexOf(this.xiaof)!=-1){
						return item.book
					}
				})
				console.log(this.list1)
				this.changePages(1)
			},
			fuiw(i,w){
				this.wdnmd1=i
				this.xiaof=w
				console.log(w)
				this.list1 = this.listz.filter((item)=>{
					if(item.book.majorCate.indexOf(this.daf)!=-1&&item.book.minorCate.indexOf(this.xiaof)!=-1){
						return item.book
					}
				})
				console.log(this.list1)
				this.changePages(1)
			},
			changePages(p){
				let start = (p-1)*this.sbfy;
				this.pagelist=this.list1.slice(start,start+this.sbfy)
			}
			
		}
		
	}
</script>

<style scoped>
	.waic{
		width: 1250px;
		border: 1px solid red;
		margin: auto;
		display: flex;
	}
	.waicleft{
		width: 20%;
		border: 1px solid red;
	}
	.wuy{
		display: none;
	}
	.zwy{
		background-color: gold;
	}
	.waicright{
		width: 75%;
		margin-left: 5%;
		border: 1px solid red;
	}
	.p1{
		text-align: left;
		color: #cab389;
		font-weight: 900;
		font-size: 1.5rem;
		margin: 0;
	}
	.diyiji{
		width: 100%;
	}
	.put{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.shu{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.shu1{
		width: 50%;
		display: flex;
	}
	.biat{
		width: 70%;
		
	}
	.biat .p2{
		text-align: left;
		margin: 0;
		padding: 0;
	}
	.biat .p3{
		text-align: left;
		font-size: 10px;
		color: gray;
		margin: 0;
		padding: 0;
	}
</style>
