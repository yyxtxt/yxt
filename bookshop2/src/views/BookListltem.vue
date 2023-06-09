<template>
	
</template>

<script>
	import { mapActions } from 'vuex'
	export default{
		name:'BookListItem',
		props:['item'],
		methods:{
			// let fun1 = this.$store
			...mapActions('cart' , ['addProductToCart']),
			
			AddCart( val ){
				let quantity = 1;
				let newItem = {
					...val,
					price : (val,price * val.discount).toFixed(2),
					quantity,
				}
				
				this.addProductToCart( newItem)
				
				this.$router.push('/cart')
			}
		}
	}
</script>

<style>
	
</style>
