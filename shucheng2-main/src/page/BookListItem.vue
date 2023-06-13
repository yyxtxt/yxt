<template>
	<div class="shu">
		<div class="shu1" v-for="item1 in item">
			<div style="width: 30%;">
				<img style="width: 100%;" :src="'https://statics.zhuishushenqi.com'+item1.book.cover" />
			</div>
			<div class="biat">
				<p class="p2">{{item1.book.title}}</p>
				<p class="p3"><span>{{item1.book.author}}|{{item1.book.majorCate}}</span></p>
				<div style="height: 30%;">
					
				</div>
				<p>暂无数据</p>
				<p style="display: flex;">热度：{{item1.book.latelyFollower}}|读者留存率：{{item1.book.retentionRatio.toFixed(2)}}%</p>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex';
	export default{
		name:'BookListItem',
		props:['item'],
		methods:{
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
		width: 100%; white-space:nowrap; overflow:hidden; text-overflow: ellipsis;
	}
	.shu{
		width: 50%;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
	}
	.shu1{
		width: 100%;
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
