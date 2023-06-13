<template>
	<div style="width: 70%;margin: auto;">
		<div style="width: 100%;margin: auto;" v-for="item in wuyu">
			<div style="width: 30%;">
				<img style="width: 100%;" :src="'https://statics.zhuishushenqi.com'+item.cover" />
			</div>
			<div style="width: 70%;">
				<p></p>
				<br />
				<p></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'ShopCart',
		data(){
			return {
				wuyu:this.$store.state.wuyu,
			}
		},
		created(){
			console.log(this.wuyu)
		},
		computed:{
			
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
