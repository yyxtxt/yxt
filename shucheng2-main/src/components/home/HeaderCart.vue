<template>
	<div class="gouwuc">
		<router-link to="/cart">
			<el-button type="primary" style="width: 50%;" @click="AddCart()">书架</el-button>
		</router-link>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {mapActions} from 'vuex';
	export default{
		data(){
			return {
				cnm:0
			}
		},
		created() {
		},
		methods:{
			...mapActions('cart',['addProductToCart']),
			AddCart(item){
				
				if(this.$store.state.user.user){
					this.addProductToCart(newItem),
					this.$router.push('/cart')
				}else{
					this.$router.push('/login');
				}
			}
		}
	}
</script>

<style>
</style>
