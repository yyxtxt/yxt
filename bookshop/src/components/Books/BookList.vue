<template>
	<div class="yuan">
		<BookListitem :po="li"></BookListitem>
	</div>
</template>

<script>
	import BookListitem from './BookListitem.vue'
	export default{
		props:['li'],
		components:{
			BookListitem,
		},
		
	}
</script>

<style scoped>
	.yuan{
		width: 60%;
		margin: 20px auto;
	}
</style>
